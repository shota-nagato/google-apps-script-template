export function bbb2Function(): void {
  console.log("This is bbb2 function");
}

export function validateInput(input: string): boolean {
  return input.length > 0 && input.trim() !== "";
} 