//variable.toUpperCase pasa la variable a mayuscula
//variable.LowerCase pasa variable a minuscula
//variable.lenght para contar caracteres de la variable
//numero.toFixed agrega decimales a un numero entero
//numero.tolocalestring() formatea el numero a la manera correcta de escribirlo
/* operadores logicos (and-or-not) */
//AND &&
//OR ||
//NOT !
//=== ESTRICTAMENTE IGUAL
//DISTINTO !=
//ESTRICTAMENTE DISTINTO !=let i = 1
// funciones sirven para reciclar codigo el mismo es Funciones y un nombre como saludar que sea claro
/*
variables y/o constantes
funciones - estructurar la lógica
condicionales (if - else - switch)
utilizar un ciclo (for - while - dowhile)
prompt - confirm - alert
console log - warn - error

Texto / String = listado de prendas
Prompt() = el usuario elige una prenda
dde el prompt > buscamos lo que ingresó en una lista
    (condicional)
alert() le respondemos con el precio/costo/importe
confirm? preguntamos ¿deseas conocer algún otro precio?
TRUE => seguimos en el ciclo while
FALSE => gracias x tu interés. chauuuu!
*/
/*
const DESC = 0.30;
const abonoPlateaAlta = 45000;
const abonoTribunaOficial = 20000;
const abonoVisera = 70000;
const abonoViejaAmelia = 40000;
const abonoPlateaEste = 60000;
const abonoPalomar = 20000;

let abonos = "";
while (abonos !== "salir") {
  abonos = prompt("¿Qué abono desea?")
  if (
    abonos === "abono platea alta" ||
    abonos === "abono tribuna oficial" ||
    abonos === "abono visera" ||
    abonos === "abono vieja amelia" ||
    abonos === "abono platea este" ||
    abonos === "abono palomar"
  ) {
    console.log("Su abono a comprar es:", abonos);
    switch (abonos) {
      case "abono platea alta":
        console.log("El precio de su abono es de:", abonoPlateaAlta * IVA);
        break;
      case "abono tribuna oficial":
        console.log("El precio de su abono es de:", abonoTribunaOficial * IVA);
        break;
      case "abono visera":
        console.log("El precio de su abono es de:", abonoVisera * IVA);
        break;
      case "abono vieja amelia":
        console.log("El precio de su abono es de:", abonoViejaAmelia * IVA);
        break;
      case "abono platea este":
        console.log("El precio de su abono es de:", abonoPlateaEste * IVA);
        break;
      case "abono palomar":
        console.log("El precio de su abono es de:", abonoPalomar * IVA);
        break;
      default:
        console.log("HUBO UN ERROR, VUELVA A INTENTARLO");
    }
  } else if (abonos !== "salir") {
    alert("No tenemos ningún abono con ese nombre, intente nuevamente");
  }
}

function calcularIVA(importe) {
  if (parseFloat(importe)) {
    resultado = importe * DESC;
    console.log("El importe + IVA es de", resultado);
  }
}

function calcularPrecioFinal() {
  let precioFinal = prompt("Ingrese el precio de su producto:");
  calcularIVA(precioFinal);
}
*/
/*
const abonos = {
  "abono platea alta": 45000,
  "abono tribuna oficial": 20000,
  "abono visera": 70000,
  "abono vieja amelia": 40000,
  "abono platea este": 60000,
  "abono palomar": 20000,
};

const DESC = 0.30;

let abonoElegido = "";
while (abonoElegido !== "salir") {
  abonoElegido = prompt("¿Qué abono desea?")
  if (abonos[abonoElegido]){
    console.log("Su abono a comprar es:", abonoElegido);
    const precioConDesc = abonos[abonoElegido] * DESC;
    const precioFinal = precioConDesc
    console.log("El precio de su abono es de:", precioFinal);
  } else if (abonoElegido !== "salir") {
    alert("No tenemos ningún abono con ese nombre, intente nuevamente");
  }
}
*/
const abonos = {
  "abono platea alta": 45000,
  "abono tribuna oficial": 20000,
  "abono visera": 70000,
  "abono vieja amelia": 40000,
  "abono platea este": 60000,
  "abono palomar": 20000,
  };
  
  const DESC = 0.30;
  
  let abonoElegido = "";
  while (abonoElegido !== "salir") {
  abonoElegido = prompt("¿Qué abono desea?");
  if (abonos[abonoElegido]) {
  console.log("Su abono a comprar es:", abonoElegido);
  const precioConDesc = abonos[abonoElegido] * (1 - DESC);
  const precioFinal = precioConDesc.toFixed(2);
  console.log("El precio de su abono es de:", precioFinal);
  } else if (abonoElegido !== "salir") {
  alert("No tenemos ningún abono con ese nombre, intente nuevamente");
  }
  }