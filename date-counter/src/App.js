import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());

  const handleCountChange = (newCount) => {
    setCount(newCount);
    const newDate = new Date();
    newDate.setDate(newDate.getDate() + newCount);
    setDate(newDate);
  };

  const handleReset = () => {
    setStep(1);
    setCount(0);
    setDate(new Date());
  };

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(event) => setStep(Number(event.target.value))}
        />
        <span>{step}</span>
      </div>
      <div>
        <button onClick={() => handleCountChange(count - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(event) => handleCountChange(Number(event.target.value))}
        />
        <button onClick={() => handleCountChange(count + step)}>+</button>
      </div>
      <p>
        {count} days from today is {date.toLocaleDateString(undefined, options)}
      </p>
      {count !== 0 || step !== 1 ? (
        <button onClick={handleReset}>Reset</button>
      ) : null}
    </div>
  );
}
