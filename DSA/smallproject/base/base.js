// Convert number from one base to another
function convert() {
  let num = document.querySelector(".change").value;
  let fromBase = document.getElementById("base1").value;
  let toBase = document.getElementById("base2").value;
  let result = document.getElementById("result");

  if (num === "") {
    alert("Please enter a number");
    return;
  }

  let decimal = parseInt(num, fromBase);

  if (isNaN(decimal)) {
    alert("Invalid number for selected base");
    return;
  }

  result.value = decimal.toString(toBase).toUpperCase();
}


// Reset input and result
function reset() {
  document.querySelector(".change").value = "";
  document.getElementById("result").value = "";
}
reset()


// Swap From Base and To Base
function swap() {
  let base1 = document.getElementById("base1");
  let base2 = document.getElementById("base2");

  let temp = base1.value;
  base1.value = base2.value;
  base2.value = temp;
}
swap() 
// Copy result to clipboard
function copyResult() {
  let result = document.getElementById("result");

  if (result.value === "") {
    alert("Nothing to copy");
    return;
  }

  result.select();
  document.execCommand("copy");
  alert("Copied");
}
copyResult()
convert()