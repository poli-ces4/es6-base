//Object =  propiedades
//Array =  elementos

const estudiante = { nombre: "Ana", apellido: "Perez", edad: 25 };
/*
//ES5
const nombre= estudiante.nombre;
const edad =  estudiante.edad;
*/
//ES6
const { nombre, edad } = estudiante;

const paises = ["Colombia", "Argentina", "Chile"];

const [x, y] = paises;
console.log(x);
const [, , z] = paises;
console.log(z);

let a = 5;
let b = 10;

[a, b] = [b, a];

console.log(a);
console.log(b);
