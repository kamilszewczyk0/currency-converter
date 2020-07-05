const form = document.querySelector(".js-form");
const amount = document.querySelector(".js-value");
const currencyChosen = document.querySelector(".js-currencyList");
const result = document.querySelector(".js-result");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const priceEUR = 4.4671;
  const priceUSD = 3.9764;
  const priceNOK = 0.4183;
  const priceRUB = 0.0564;
  const priceGBP = 4.956;

  const amountValue = amount.value;
  const currency = currencyChosen.value;
  let sum;

  switch (currency) {
    case "eur":
      sum = amountValue / priceEUR;
      break;

    case "usd":
      sum = amountValue / priceUSD;
      break;

    case "nok":
      sum = amountValue / priceNOK;
      break;

    case "rub":
      sum = amountValue / priceRUB;
      break;

    case "gbp":
      sum = amountValue / priceGBP;
      break;
  }

  result.innerHTML = `From <strong>${amountValue} PLN</strong> You will receive <strong>${sum.toFixed(
    2
  )} ${currency.toUpperCase()}</strong>.`;
});
