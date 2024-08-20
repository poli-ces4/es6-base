// Function Declaration (nombradas)

function jugar(valor = 10) {
  return valor * 1000;
}
console.log(jugar(5));

// Function Expression (anonimas)

const resp = function (valor = 10) {
  return valor * 1000;
};

console.log(resp(6));

// Paso por valor
let x = 20;
function cambiarValor(a) {
  a = 10;
}
cambiarValor(x);
console.log(x);

// Paso por referencia
const persona = { name: "Juan", lastName: "Perez" };
function cambioValorRef(objt) {
  objt.name = "Pedro";
}
cambioValorRef(persona);
console.log(persona);
