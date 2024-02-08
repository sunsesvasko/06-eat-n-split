import SplitBill from "./SplitBill";
import FriendList from "./FriendList";
import AddFriend from "./AddFriend";
import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [showForm, setShowForm] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selected, setSelected] = useState("");

  const handleAddFriend = (friend) => {
    setFriends((friends) => [...friends, friend]);
  };

  const handleSplitBill = (value) => {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.name === selected
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          selected={selected}
          onSelect={setSelected}
        />
        {showForm && <AddFriend onAddFriend={handleAddFriend} />}
        <button
          className="button"
          onClick={() => setShowForm((showForm) => !showForm)}
        >
          {showForm ? "Close" : "Add Friend"}
        </button>
      </div>
      {selected !== "" && (
        <SplitBill name={selected} onSplitBill={handleSplitBill} />
      )}
    </div>
  );
}
