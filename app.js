{
  const amount = document.querySelector(".js-value");

  const calculateResult = (amount, currency) => {
    const priceEUR = 4.4671;
    const priceUSD = 3.9764;
    const priceNOK = 0.4183;
    const priceRUB = 0.0564;
    const priceGBP = 4.956;

    const amountValue = amount.value;
    switch (currency) {
      case "eur":
        return amountValue / priceEUR;

      case "usd":
        return amountValue / priceUSD;

      case "nok":
        return amountValue / priceNOK;

      case "rub":
        return amountValue / priceRUB;

      case "gbp":
        return amountValue / priceGBP;
    }
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const currencyChosen = document.querySelector(".js-currencyList");
    const result = document.querySelector(".js-result");
    const amountValue = amount.value;
    const currency = currencyChosen.value;

    let sum = calculateResult(amount, currency);

    result.innerHTML = `From <strong>${amountValue} PLN</strong> You will receive <strong>${sum.toFixed(
      2
    )} ${currency.toUpperCase()}</strong>.`;
  };

  const init = () => {
    const form = document.querySelector(".js-form");

    form.addEventListener("submit", onFormSubmit);
  };
  init();
}
