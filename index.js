const totalUah = document.getElementById("totalUah");
const euroAmount = document.getElementById("euroAmount");
const exchangeRateEuro = document.getElementById("exchangeRateEuro");

const totalEuro = document.getElementById("totalEuro");
const uahAmount = document.getElementById("uahAmount");
const exchangeRateUah = document.getElementById("exchangeRateUah");

function calculateEurToUah(amount, exchangeRate) {
  return amount * exchangeRate;
}

function renderTotalUah() {
  totalUah.innerHTML = calculateEurToUah(
    euroAmount.value,
    exchangeRateEuro.value
  );
}

function calculateUahToEur(amount, exchangeRate) {
  return amount / exchangeRate;
}

function renderTotalEuro() {
  totalEuro.innerHTML = calculateUahToEur(
    uahAmount.value,
    exchangeRateUah.value
  ).toFixed(2);
}
