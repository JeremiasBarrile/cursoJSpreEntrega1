
const abonos = {
  "abono platea alta": 45000,
  "abono tribuna oficial": 20000,
  "abono visera": 70000,
  "abono vieja amelia": 40000,
  "abono platea este": 60000,
  "abono palomar": 20000,
};

let DESC = 0.3;

function calculoAbonos() {
  let abonoElegido = "";
  while (abonoElegido.toLowerCase().trim() !== "salir") {
    abonoElegido = prompt("¿Qué abono desea?");
    abonoElegido = abonoElegido.toLowerCase().trim();
    if (abonos[abonoElegido]) {
      console.log("Su abono a comprar es:", abonoElegido);
      const precioConDesc = abonos[abonoElegido] * (1 - DESC);
      const precioFinal = precioConDesc.toFixed(2);
      console.log("El precio de su abono es de:", precioFinal);
    } else if (abonoElegido !== "salir") {
      alert("No tenemos ningún abono con ese nombre, intente nuevamente");
    }
  }
}
