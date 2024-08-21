/**
 * Operator Rest (recibir parametros)
 */

function totalizar(...datos) {
  let total = 0;
  datos.forEach((dato) => (total += dato));
  return total;
}
console.log(totalizar(10, 20, 30, 40, 50, 60, 70, 80, 90));

/**
 * Operator Spread (enviar argumentos)
 */

const deudaPdte = 10000;
const deudasAdicionales = [100, 200, 300, 400];
const totalDeudas = [deudaPdte, ...deudasAdicionales];
console.log(totalDeudas);
const resultado = totalizar(...totalDeudas);
console.log(resultado);
