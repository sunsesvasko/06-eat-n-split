import Friend from "./Friend";

export default function FriendList({ friends, selected, onSelect }) {
  return (
    <ul>
      {friends.map((friend) => {
        return (
          <Friend
            id={friend.id}
            key={friend.id}
            name={friend.name}
            selected={selected}
            onSelect={onSelect}
          >
            <img src={friend.image} alt="Profile Picture" />
            <p>Owes you</p>
          </Friend>
        );
      })}
    </ul>
  );
}
