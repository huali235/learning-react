import BillInput from "./BillInput";
import SelectPercentage from "./SelectPercentage";
import { useState } from "react";
import Total from "./Total";
import ResetButton from "./ResetButton";

export default function App() {
  const [bill, setBill] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [friendPercentage, setFriendPercentage] = useState(0);

  function handleSetBill(e) {
    setBill(e.target.value);
  }

  function handleSetPercentage(e) {
    setPercentage(parseFloat(e.target.value));
  }

  function handleSetFriendPercentage(e) {
    setFriendPercentage(parseFloat(e.target.value));
  }

  return (
    <>
      <BillInput bill={bill} onSetBill={handleSetBill} />
      <SelectPercentage
        percentage={percentage}
        onSetPercentage={handleSetPercentage}
      >
        <h4>How did you like the service?</h4>
      </SelectPercentage>
      <SelectPercentage
        percentage={friendPercentage}
        onSetPercentage={handleSetFriendPercentage}
      >
        <h4>How did your friend like the service?</h4>
      </SelectPercentage>
      {bill > 0 && (
        <>
          <Total
            bill={bill}
            percentage={percentage}
            friendPercentage={friendPercentage}
          />
          <ResetButton
            setBill={setBill}
            setPercentage={setPercentage}
            setFriendPercentage={setFriendPercentage}
          />
        </>
      )}
    </>
  );
}
