
export default function Header() {
  const today = new Date().toDateString();
  return (
    <header className="header">
      <h1> Expense Tracker</h1>
      <p>{today}</p>
    </header>
  );
}
