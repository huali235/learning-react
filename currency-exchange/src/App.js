//https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD

import { useEffect, useState } from "react";

export default function App() {
  const [currencyTo, setCurrencyTo] = useState("USD");
  const [currencyFrom, setCurrencyFrom] = useState("EUR");
  const [value, setValue] = useState(1);
  const [result, setResult] = useState("");

  function onChangeCurrencyTo(e) {
    setCurrencyTo(e.target.value);
  }

  function onChangeCurrencyFrom(e) {
    setCurrencyFrom(e.target.value);
  }

  function onChangeValue(e) {
    setValue(Number(e.target.value));
  }

  useEffect(
    function () {
      async function convertCurrency() {
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${value}&from=${currencyFrom}&to=${currencyTo}`
        );
        const data = await res.json();

        if (currencyFrom === currencyTo) return setResult(value);
        setResult(data.rates[currencyTo]);
      }
      convertCurrency();
    },
    [currencyTo, currencyFrom, value]
  );

  return (
    <div>
      <input value={value} type="text" onChange={onChangeValue} />
      <select onChange={onChangeCurrencyFrom}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select onChange={onChangeCurrencyTo}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>OUTPUT: {result}</p>
    </div>
  );
}
