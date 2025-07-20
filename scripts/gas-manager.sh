#!/bin/bash

# GAS プロジェクト管理スクリプト
# 使用方法:
#   ./scripts/gas-manager.sh build <project-name>     # 特定のプロジェクトをビルド
#   ./scripts/gas-manager.sh build all               # 全プロジェクトをビルド
#   ./scripts/gas-manager.sh push <project-name>      # 特定のプロジェクトをpush
#   ./scripts/gas-manager.sh push all                # 全プロジェクトをpush
#   ./scripts/gas-manager.sh deploy <project-name>    # 特定のプロジェクトをdeploy
#   ./scripts/gas-manager.sh deploy all              # 全プロジェクトをdeploy
#   ./scripts/gas-manager.sh list                    # プロジェクト一覧を表示

set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

PROJECTS_DIR="projects"
SCRIPT_DIR=$(cd "$(dirname "$0")" && pwd)
ROOT_DIR=$(cd "$SCRIPT_DIR/.." && pwd)

error() {
    echo -e "${RED}❌ エラー: $1${NC}" >&2
    exit 1
}

success() {
    echo -e "${GREEN}✅ $1${NC}"
}

warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

get_projects() {
    if [ ! -d "$ROOT_DIR/$PROJECTS_DIR" ]; then
        error "プロジェクトディレクトリが見つかりません: $ROOT_DIR/$PROJECTS_DIR"
    fi

    find "$ROOT_DIR/$PROJECTS_DIR" -maxdepth 1 -type d ! -path "$ROOT_DIR/$PROJECTS_DIR" -exec basename {} \;
}

validate_project() {
    local project_name="$1"
    if [ ! -d "$ROOT_DIR/$PROJECTS_DIR/$project_name" ]; then
        error "プロジェクト '$project_name' が見つかりません"
    fi
}

build_project() {
    local project_name="$1"
    info "プロジェクト '$project_name' をビルド中..."

    cd "$ROOT_DIR"
    node build.js "$project_name"
    success "プロジェクト '$project_name' のビルドが完了しました"
}

push_project() {
    local project_name="$1"
    info "プロジェクト '$project_name' をpush中..."

    validate_project "$project_name"

    if [ ! -f "$ROOT_DIR/$PROJECTS_DIR/$project_name/.clasp.json" ]; then
        error "プロジェクト '$project_name' の .clasp.json が見つかりません。clasp create を実行してください。"
    fi

    cd "$ROOT_DIR/$PROJECTS_DIR/$project_name"
    clasp push
    success "プロジェクト '$project_name' のpushが完了しました"
}

# 関数: プロジェクトのdeploy
deploy_project() {
    local project_name="$1"
    info "プロジェクト '$project_name' をdeploy中..."

    build_project "$project_name"
    push_project "$project_name"
    success "プロジェクト '$project_name' のdeployが完了しました"
}

# 関数: 全プロジェクトに対する操作
process_all_projects() {
    local action="$1"
    local projects=$(get_projects)

    if [ -z "$projects" ]; then
        warning "プロジェクトが見つかりません"
        return
    fi

    info "以下のプロジェクトに対して $action を実行します:"
    echo "$projects" | sed 's/^/  - /'
    echo

    while IFS= read -r project; do
        case "$action" in
            "build")
                build_project "$project"
                ;;
            "push")
                push_project "$project"
                ;;
            "deploy")
                deploy_project "$project"
                ;;
        esac
        echo
    done <<< "$projects"
}

# 関数: プロジェクト一覧の表示
list_projects() {
    local projects=$(get_projects)

    if [ -z "$projects" ]; then
        warning "プロジェクトが見つかりません"
        return
    fi

    info "利用可能なプロジェクト:"
    echo "$projects" | sed 's/^/  - /'
}

# 関数: ヘルプの表示
show_help() {
    echo "GAS プロジェクト管理スクリプト"
    echo
    echo "使用方法:"
    echo "  $0 build <project-name>     特定のプロジェクトをビルド"
    echo "  $0 build all               全プロジェクトをビルド"
    echo "  $0 push <project-name>      特定のプロジェクトをpush"
    echo "  $0 push all                全プロジェクトをpush"
    echo "  $0 deploy <project-name>    特定のプロジェクトをdeploy"
    echo "  $0 deploy all              全プロジェクトをdeploy"
    echo "  $0 list                    プロジェクト一覧を表示"
    echo "  $0 help                    このヘルプを表示"
    echo
    echo "例:"
    echo "  $0 build sample-project"
    echo "  $0 deploy all"
    echo "  $0 list"
}

# メイン処理
main() {
    if [ $# -eq 0 ]; then
        show_help
        exit 1
    fi

    local command="$1"
    local target="$2"

    case "$command" in
        "build")
            if [ "$target" = "all" ]; then
                process_all_projects "build"
            elif [ -n "$target" ]; then
                validate_project "$target"
                build_project "$target"
            else
                error "プロジェクト名または 'all' を指定してください"
            fi
            ;;
        "push")
            if [ "$target" = "all" ]; then
                process_all_projects "push"
            elif [ -n "$target" ]; then
                validate_project "$target"
                push_project "$target"
            else
                error "プロジェクト名または 'all' を指定してください"
            fi
            ;;
        "deploy")
            if [ "$target" = "all" ]; then
                process_all_projects "deploy"
            elif [ -n "$target" ]; then
                validate_project "$target"
                deploy_project "$target"
            else
                error "プロジェクト名または 'all' を指定してください"
            fi
            ;;
        "list")
            list_projects
            ;;
        "help"|"-h"|"--help")
            show_help
            ;;
        *)
            error "不明なコマンド: $command"
            show_help
            exit 1
            ;;
    esac
}

# スクリプト実行
main "$@"
