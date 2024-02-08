import { useState } from "react";

export default function SplitBill({ name }) {
  const [bill, setBill] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const [paying, setPaying] = useState("you");
  let friendExpense = bill - yourExpense;

  return (
    <form className="form-split-bill">
      <h2>Split a bill with {name}</h2>
      <label htmlFor="bill">💰 Bill Value</label>
      <input
        type="number"
        name="bill"
        min={0}
        value={bill}
        onChange={(e) => setBill(e.target.value * 1)}
      />
      {/* Your Expenses */}
      <label htmlFor="yourExpense">🕴️ Your Expense</label>
      <input
        type="number"
        name="yourExpense"
        min={0}
        value={yourExpense}
        onChange={(e) => setYourExpense(e.target.value * 1)}
      />
      {/* Clark's Expenses */}
      <label htmlFor="friendExpense">🧑‍🤝‍👩 {name}'s expense:</label>
      <input type="text" name="friendExpense" value={friendExpense} readOnly />
      {/* Who's paying */}
      <label htmlFor="bill">🤑 Who's paying the bill?</label>
      <select value={paying} onChange={(e) => setPaying(e.target.value)}>
        <option value="You">You</option>
        <option value={name}>{name}</option>
      </select>
      <button className="button">Split bill</button>
    </form>
  );
}
