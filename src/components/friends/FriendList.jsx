import FriendListItem from "../friend/FriendListItem";

export default function FriendList({ friendsData }) {
  return (
      <ul>
      {friendsData.map((friend) => {
        return (
          <li key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
}
