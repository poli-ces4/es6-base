//Callback = es una funcion que se le pasa como parametro a otra funcion

function respuesta(res) {
  console.log(res);
}

function calcular(op1, op2, funcionCallback) {
  let resp = op1 + op2;
  funcionCallback(resp);
}

calcular(5, 25, respuesta);

//Promesas = Son un objeto, por naturaleza son asincronas.

let promise = new Promise((res, rej) => {
  let estado = true;
  if (estado) {
    res("Resolvio la promesa");
  } else {
    rej("Se rechazo la promesa");
  }
});

/*opcion 1
promise
  .then((valor) => console.log(valor))
  .catch((error) => console.log(error));
*/
/*opcion 2

promise.then(
    (valor)=>console.log(valor),
    (error)=>console.log(error)
)*/

//promesa con setTimeout para evidenciar asincronismo
/*
let promesa2 = new Promise((res) => {
  console.log("Inicio promesa 2");
  setTimeout(() => {
    res("Resolvio la promesa 2");
  }, 3000);
  console.log("Finalizo promesa 2");
});

promesa2.then((valor) => console.log(valor));
*/

// async = indicarle a una funcion que regresa una promesa
// await = esperar el resultado de una promesa

/*
async function funcionConAsync() {
  return "Ejemplo de async";
}

funcionConAsync().then((x) => console.log(x));
*/

async function funcionConAsyncAwait() {
  console.log("Inicio...");
  let promesa3 = new Promise((res) => {
    setTimeout(() => {
      res("Resolvio la promesa 3");
    }, 3000);
  });
  let promesa4 = new Promise((res) => {
    setTimeout(() => {
      res("Resolvio la promesa 4");
    }, 6000);
  });
  console.log(await promesa3);
  console.log(await promesa4);
  console.log("Fin");
}

funcionConAsyncAwait();
