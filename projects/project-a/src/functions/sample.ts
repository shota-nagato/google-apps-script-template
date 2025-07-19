export function sample(): void {
  const message = 'sample'
  const numbers = [1, 2, 3]
  const doubled = numbers.map((n) => n * 2)
  console.log(`Message: ${message}, Doubled: ${doubled.join(', ')}`)
}
