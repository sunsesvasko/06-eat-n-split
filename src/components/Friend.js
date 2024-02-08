export default function Friend({ children, name, selected, onSelect }) {
  return (
    <li className={`${selected === name && "selected"}`}>
      {children}
      <h3>{name}</h3>
      <p>Owes you</p>
      <button
        className="button"
        onClick={() => (selected !== name ? onSelect(name) : onSelect(""))}
      >
        {selected !== name ? "Select" : "Close"}
      </button>
    </li>
  );
}
