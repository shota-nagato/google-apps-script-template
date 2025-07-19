export function bbb1Function(): void {
  console.log('This is bbb1 function')
}

export function processData(data: any[]): any[] {
  return data.map((item) => ({ ...item, processed: true }))
}
