import { useState } from "react";

export default function App() {
  return <Counter />;
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

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div>
      <div>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => handleCountChange(count - step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => handleCountChange(count + step)}>+</button>
      </div>
      <p>
        {count} days from today is {date.toLocaleDateString(undefined, options)}
      </p>
    </div>
  );
}
