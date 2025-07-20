import { Person } from '@/shared/clients/class'

export function function2(): void {
  const person = new Person('John', 30)
  person.sayHello()
}
