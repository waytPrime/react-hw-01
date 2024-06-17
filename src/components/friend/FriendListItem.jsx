import css from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  let className;
  if (isOnline) {
    className = css.online;
  } else {
    className = css.offline;
  }
  return (
    <>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={className}>{isOnline ? "Online" : "Offline"}</p>
    </>
  );
}
