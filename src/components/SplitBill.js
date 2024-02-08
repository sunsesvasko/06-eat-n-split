export default function SplitBill({ name }) {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {name}</h2>
      <label for="bill">💰 Bill Value</label>
      <input type="text" name="bill" value="" />
      <label for="yourExpense">🕴️ Your Expense</label>
      <input type="text" name="yourExpense" value="" />
      <label for="friendExpense">🧑‍🤝‍👩 {name}'s expense:</label>
      <input type="text" name="friendExpense" value="" />
      <label for="bill">🤑 Who's paying the bill?</label>
      <select>
        <option value="you">You</option>
        <option value={name}>{name}</option>
      </select>
    </form>
  );
}
