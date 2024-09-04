const arr = [
  { name: "luna", sex: "f", age: 200, species: "dog" },
  { name: "jimmy", sex: "m", age: 60, species: "human" },
  { name: "snoop", sex: "m", age: 60, species: "human" },
  { name: "jennifer", sex: "f", age: 30, species: "human" },
  { name: "yeller", sex: "f", age: 20, species: "dog" },
];

/**
 *  1 name de todos los dog
 *  2 name del sex = f
 *  3 total de edades
 *  4 promedio edades de los humanos
 *  5 nombre humanos mayores de 50
 */

//1
const nameDog = arr.filter((item) => item.species === "dog").map((x) => x.name);
console.log(nameDog);

//2
const namefemele = arr.filter((item) => item.sex === "f").map((x) => x.name);
console.log(namefemele);

//3 total de edades
const totalAges = arr.reduce((suma, item) => (suma += item.age), 0);
console.log(totalAges);

//4 promedio edades de los humanos
const humanos = arr.filter((item) => item.species === "human");
const promedio =
  humanos.reduce((total, item) => (total += item.age), 0) / humanos.length;
console.log(promedio);

//5
const mayores = arr
  .filter((item) => item.species === "human" && item.age > 50)
  .map((x) => x.name);
console.log(mayores);
