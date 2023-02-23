let totalUah = document.getElementById("totalUah");
let euroAmount = document.getElementById("euroAmount");
let exchangeRateEuro = document.getElementById("exchangeRateEuro");

let totalEuro = document.getElementById("totalEuro");
let uahAmount = document.getElementById("uahAmount");
let exchangeRateUah = document.getElementById("exchangeRateUah");

function calculateUah() {
  let total = euroAmount.value * exchangeRateEuro.value;
  totalUah.innerHTML = total;
}

function calculateEur() {
  let total = uahAmount.value / exchangeRateUah.value;
  totalEuro.innerHTML = total.toFixed(2);
}
