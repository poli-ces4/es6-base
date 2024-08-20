//Explicar Var
function explicarVar() {
  var edad = 20;
  edad = 90;
  if (true) {
    var edad = 50;
    console.log(edad);
  }
  console.log(edad);
}
explicarVar();

//Explicar Let
function explicarLet() {
  let precio = 20;
  precio = 90;
  if (true) {
    let precio = 50;
    console.log(precio);
  }
  console.log(precio);
}
explicarLet();

//Explicar Const
function explicarConst() {
  const PI = 20;
  const jugador = { name: "Luis" };
  jugador.age = 30;
  //PI = 90;
  if (true) {
    const PI = 50;
    console.log(PI);
  }
  console.log(PI);
  console.log(jugador);
}
explicarConst();
