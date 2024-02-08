import Friend from "./Friend";

export default function FriendList({ initialFriends, selected, onSelect }) {
  return (
    <ul>
      {initialFriends.map((friend) => {
        return (
          <Friend
            id={friend.id}
            key={friend.id}
            name={friend.name}
            selected={selected}
            onSelect={onSelect}
          >
            <img src={friend.image} alt="Profile Picture" />
          </Friend>
        );
      })}
    </ul>
  );
}
