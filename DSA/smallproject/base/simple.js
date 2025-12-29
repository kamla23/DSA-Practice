
function toBinary() {
  let num = document.getElementById("num").value;
  document.getElementById("result").innerText =
    "Binary: " + Number(num).toString(2);
}
toBinary()

function toDecimal() {
  let num = document.getElementById("num").value;
  document.getElementById("result").innerText =
    "Decimal: " + Number(num).toString(10);
}
toDecimal()

function toOctal() {
  let num = document.getElementById("num").value;
  document.getElementById("result").innerText =
    "Octal: " + Number(num).toString(8);
}
toOctal() 

function toHex() {
  let num = document.getElementById("num").value;
  document.getElementById("result").innerText =
    "Hexadecimal: " + Number(num).toString(16).toUpperCase();
}
toHex()