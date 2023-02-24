const totalUah = document.getElementById("totalUah");
const euroAmount = document.getElementById("euroAmount");
const exchangeRateEuro = document.getElementById("exchangeRateEuro");

const totalEuro = document.getElementById("totalEuro");
const uahAmount = document.getElementById("uahAmount");
const exchangeRateUah = document.getElementById("exchangeRateUah");

function calculateUah(amount, exchangeRate) {
  return amount * exchangeRate;
}

function renderTotalUah() {
  totalUah.innerHTML = calculateUah(euroAmount.value, exchangeRateEuro.value);
}

function calculateEur(amount, exchangeRate) {
  return amount / exchangeRate;
}

function renderTotalEuro() {
  totalEuro.innerHTML = calculateEur(
    uahAmount.value,
    exchangeRateUah.value
  ).toFixed(2);
}
