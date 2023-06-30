export default function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <h4>How much was the bill?</h4>{" "}
      <input type="text" value={bill} onChange={(e) => onSetBill(e)} />
    </div>
  );
}
