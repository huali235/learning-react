export default function Total({ bill, percentage, friendPercentage }) {
  const averagePercentage = ((percentage + friendPercentage) / 2).toFixed(2);
  const total = parseFloat(bill) * (1 + parseFloat(averagePercentage));
  const tip = parseFloat(bill) * parseFloat(averagePercentage);
  return (
    <div>
      <h4>
        You pay ${total.toFixed(2)} (${bill} + ${tip.toFixed(2)} tip)
      </h4>
    </div>
  );
}
