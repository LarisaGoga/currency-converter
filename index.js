function calculateUah() {
  let totalUah = document.getElementById("totalUah");
  let euroAmount = document.getElementById("euroAmount").value;
  let exchangeRateEuro = document.getElementById("exchangeRateEuro").value;
  let total = euroAmount * exchangeRateEuro;
  totalUah.innerHTML = total;
}

function calculateEur() {
  let totalEuro = document.getElementById("totalEuro");
  let uahAmount = document.getElementById("uahAmount").value;
  let exchangeRateUah = document.getElementById("exchangeRateUah").value;
  let total = uahAmount / exchangeRateUah;
  totalEuro.innerHTML = total.toFixed();
}
