class Person {
  constructor(name, lastname, age) {
    this.name = name;
    this.lastName = lastname;
    this.age = age;
  }
  saludar() {
    return `Hola ${this.name}`;
  }
}

const persona = new Person("Ana", "Lopez", 20);
console.log(persona.name);
