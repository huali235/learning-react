export default function ResetButton({
  setBill,
  setPercentage,
  setFriendPercentage,
}) {
  function handleReset() {
    setBill(0);
    setPercentage(0);
    setFriendPercentage(0);
  }
  return (
    <div>
      <button onClick={() => handleReset()}>Reset</button>
    </div>
  );
}
