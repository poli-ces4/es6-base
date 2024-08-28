//Mutabilidad
// Mutable = Cambia
// Inmutable = No cambia

let ciudades = ["Medellin", "Envigado", "Bello"];

for (let i = 0; i < ciudades.length; i++) {
  console.log(ciudades[i]);
}

ciudades.forEach((ciudad) => {
  console.log(ciudad);
});

//son mutables = push-pop-shift

ciudades.push("Copacabana");
console.log(ciudades);
ciudades.pop();
console.log(ciudades);
ciudades.shift();
console.log(ciudades);

//inmutables
//Map >> Extraer

let estudiantes = ["Juan", "Ana", "Luis"];
let nombresPrint = estudiantes.map((name) => `${name} -`);
console.log(nombresPrint);
console.log(estudiantes);

let products = [
  { name: "Agua", cost: 20 },
  { name: "Coca Cola", cost: 30 },
  { name: "Cerveza", cost: 40 },
];

let onlyNames = products.map((product) => product.name);
console.log(onlyNames);

let productsTax = products.map((p) => {
  return { ...p, tax: 19 };
});
console.log(productsTax);

const equiposFPC = [
  { nombre: "Nacional", ciudad: "Medellin", ligas: 17, libertadores: 2 },
  { nombre: "Medellin", ciudad: "Medellin", ligas: 8, libertadores: 0 },
  { nombre: "Millonarios", ciudad: "Bogota", ligas: 15, libertadores: 0 },
  { nombre: "SantaFE", ciudad: "Bogota", ligas: 7, libertadores: 0 },
  { nombre: "America", ciudad: "Cali", ligas: 16, libertadores: 0 },
  { nombre: "Cali", ciudad: "Cali", ligas: 9, libertadores: 0 },
  { nombre: "Bucaramanga", ciudad: "Bucaramanga", ligas: 1, libertadores: 0 },
  { nombre: "Once Caldas", ciudad: "Manizales", ligas: 4, libertadores: 1 },
];

//Map = Iterar - Extraer

const nombresEquipos = equiposFPC.map((equipo) => equipo.nombre);
console.log(nombresEquipos);

//Find = buscar (lal primera coincidencia)
const ciudadBogota = equiposFPC.find((equipo) => equipo.ciudad === "Bogota");
console.log(ciudadBogota);

//Filter = buscar/Filtar

const nombresEquipoCiudadBogota = equiposFPC
  .filter((equipo) => equipo.ciudad === "Bogota")
  .map((equipo) => equipo.nombre);
console.log(nombresEquipoCiudadBogota);

//Every = cada uno debe cumplir
const everyLibertadores = equiposFPC.every((equipo) => equipo.libertadores > 0);
console.log(everyLibertadores);

//Some = alguno debe cumpli
const someLibertadores = equiposFPC.some((equipo) => equipo.libertadores > 0);
console.log(someLibertadores);

//Reduce
const totalLibertadores = equiposFPC.reduce(
  (acumular, equipo) => (acumular += equipo.libertadores),
  0
);
console.log(totalLibertadores);

const totalLigasCiudadMed = equiposFPC
  .filter((e) => e.ciudad === "Medellin")
  .reduce((contador, eq) => (contador += eq.ligas), 0);

console.log(totalLigasCiudadMed);

const totalTorneos = equiposFPC.reduce(
  (prev, equipo) => ({
    ligas: prev.ligas + equipo.ligas,
    libertadores: prev.libertadores + equipo.libertadores,
  }),
  { ligas: 0, libertadores: 0 }
);
console.log(totalTorneos);

const texto = [
  "Una función de",
  "callback es una",
  "función que se",
  "pasa a otra",
  "función como",
  "un argumento.",
];

const frase = texto.reduce(
  (fraseCompleta, palabra) => (fraseCompleta += " " + palabra),
  ""
);
console.log(frase);

console.log(equiposFPC);
