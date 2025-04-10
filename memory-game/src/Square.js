import "./Square.css";

export default function Square({ active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`square ${active ? "active" : ""}`}
    />
  );
}