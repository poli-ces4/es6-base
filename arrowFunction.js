const saludar = function (nombre) {
  return `Hola ${nombre} como vas?`;
};

console.log(saludar("Jorge"));

const saludarImplicito = (nombre) => `Hola ${nombre} como vas?`;

const saludarNew = (nombre) => {
  return `Hola ${nombre} como vas?`;
};

console.log(saludarNew("Jorge"));

const calcular = (valor1, valor2) => valor1 + valor2;
console.log(calcular(10, 2));
