export default function generateBalance() {
  const balance = (Math.random() * 10000).toFixed(2);

  return Number(balance);
}
