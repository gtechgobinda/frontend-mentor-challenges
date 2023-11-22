const billAmountInputEl = document.querySelector(".billAmount-input");
const peopleInputEl = document.querySelector(".people-input");
const tipPerPersonEl = document.querySelector(".tip-per-person");
const totalPerPersonEl = document.querySelector(".total-per-person");
const tipsEl = document.querySelectorAll(".tips");
const tipCustomEl = document.querySelector(".tip-custom");
const resetBtnEl = document.querySelector(".reset-btn");
const errorEl = document.querySelector(".error");

billAmountInputEl.addEventListener("input", billInputFun);
peopleInputEl.addEventListener("input", peopleInputFun);
tipsEl.forEach(function (val) {
  val.addEventListener("click", handleClick);
});
tipCustomEl.addEventListener("input", tipInputFun);
resetBtnEl.addEventListener("click", reset);

billAmountInputEl.value = "0.0";
peopleInputEl.value = "1";
tipPerPersonEl.innerHTML = "$" + (0.0).toFixed(2);
totalPerPersonEl.innerHTML = "$" + (0.0).toFixed(2);

let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0.15;

function billInputFun() {
  billValue = parseFloat(billAmountInputEl.value);
  calculateTip();
}

function peopleInputFun() {
  peopleValue = parseInt(peopleInputEl.value);

  if (peopleValue < 1) {
    errorEl.style.display = "flex";
    peopleInputEl.style.border = "thick solid red";
  } else {
    errorEl.style.display = "none";
    peopleInputEl.style.border = "none";
    calculateTip();
  }
}

function tipInputFun() {
  tipValue = parseFloat(tipCustomEl.value/100);
  console.log(tipValue)
  tipsEl.forEach(function (val) {
    val.classList.remove("active-tip");
  });
  calculateTip();
}

function handleClick(e) {
  tipsEl.forEach(function (val) {
    val.classList.remove("active-tip");
    if (e.target.innerHTML == val.innerHTML) {
      val.classList.add("active-tip");
      tipCustomEl.value=""
      tipValue = parseFloat(val.innerHTML)/100;
      console.log(tipValue);
    }
  });
  calculateTip();
}

function calculateTip() {
  if (peopleValue >= 1) {
    let tipAmount = (billValue * tipValue) / peopleValue;
    let total = (billValue + tipAmount) / peopleValue;
    tipPerPersonEl.innerHTML = "$" + tipAmount.toFixed(2);
    totalPerPersonEl.innerHTML = "$" + total.toFixed(2);
  }
}

function reset() {
  billAmountInputEl.value = "0.00";
  billInputFun();
  peopleInputEl.value = "1";
  peopleInputFun();
  tipCustomEl.Value = "";
}
