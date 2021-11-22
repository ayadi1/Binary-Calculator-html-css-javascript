const res = document.getElementById("res");
const btn0 = document.getElementById("btn0");
const btn1 = document.getElementById("btn1");
const btnClr = document.getElementById("btnClr");
const btnEql = document.getElementById("btnEql");
const btnSum = document.getElementById("btnSum");
const btnSub = document.getElementById("btnSub");
const btnMul = document.getElementById("btnMul");
const btnDiv = document.getElementById("btnDiv");
var firstNumber = 0;
var lastNumber = 0;
var opera = "";

const addToFirstNumber = (e) => {
  firstNumber += e.target.value;
  res.innerHTML += e.target.value;
};

const addToLastNumber = (e) => {
  lastNumber += e.target.value;
  res.innerHTML += e.target.value;
};

btn0.addEventListener("click", addToFirstNumber);
btn1.addEventListener("click", addToFirstNumber);

btnSub.addEventListener("click", () => {
  opera = "-";
  res.innerHTML += "-";
  btn0.removeEventListener("click", addToFirstNumber);
  btn1.removeEventListener("click", addToFirstNumber);
  //
  btn0.addEventListener("click", addToLastNumber);
  btn1.addEventListener("click", addToLastNumber);
});

btnMul.addEventListener("click", () => {
  opera = "*";
  res.innerHTML += "*";
  btn0.removeEventListener("click", addToFirstNumber);
  btn1.removeEventListener("click", addToFirstNumber);
  //
  btn0.addEventListener("click", addToLastNumber);
  btn1.addEventListener("click", addToLastNumber);
});

btnDiv.addEventListener("click", () => {
  opera = "/";
  res.innerHTML += "/";
  btn0.removeEventListener("click", addToFirstNumber);
  btn1.removeEventListener("click", addToFirstNumber);
  //
  btn0.addEventListener("click", addToLastNumber);
  btn1.addEventListener("click", addToLastNumber);
});
btnSum.addEventListener("click", () => {
  opera = "+";
  res.innerHTML += "+";
  btn0.removeEventListener("click", addToFirstNumber);
  btn1.removeEventListener("click", addToFirstNumber);
  //
  btn0.addEventListener("click", addToLastNumber);
  btn1.addEventListener("click", addToLastNumber);
});

// calc

btnEql.addEventListener("click", () => {
  firstNumber = Number(firstNumber);
  lastNumber = Number(lastNumber);
  const first = parseInt(firstNumber, 2);
  const last = parseInt(lastNumber, 2);
  if (opera === "+") {
    res.innerHTML = ((first + last) >>> 0).toString(2);
    firstNumber = 0;
    lastNumber = 0;
  } else if (opera === "-") {
    res.innerHTML = ((first - last) >>> 0).toString(2);
    firstNumber = 0;
    lastNumber = 0;
  } else if (opera === "*") {
    res.innerHTML = ((first * last) >>> 0).toString(2);
    firstNumber = 0;
    lastNumber = 0;
  } else if (opera === "/") {
    res.innerHTML = ((first / last) >>> 0).toString(2);
    firstNumber = 0;
    lastNumber = 0;
  }
});
btnClr.addEventListener("click", () => {
  firstNumber = 0;
  lastNumber = 0;
  opera = "";
  res.innerHTML = "";
  btn0.removeEventListener("click", addToLastNumber);
  btn1.removeEventListener("click", addToLastNumber);
  //
  btn0.addEventListener("click", addToFirstNumber);
  btn1.addEventListener("click", addToFirstNumber);
});
