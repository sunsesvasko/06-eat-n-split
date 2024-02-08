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
            <p
              className={
                friend.balance === 0 ? "" : friend.balance > 0 ? "green" : "red"
              }
            >
              {friend.balance === 0
                ? `You and ${friend.name} are even`
                : friend.balance > 0
                ? `${friend.name} owes you $${friend.balance}`
                : `You owe ${friend.name} $${friend.balance * -1}`}
            </p>
          </Friend>
        );
      })}
    </ul>
  );
}
