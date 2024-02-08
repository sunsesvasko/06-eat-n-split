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
  const [selected, setSelected] = useState("");

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          initialFriends={initialFriends}
          selected={selected}
          onSelect={setSelected}
        />
        <AddFriend />
      </div>
      {selected !== "" && <SplitBill name={selected} />}
    </div>
  );
}
