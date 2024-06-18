import Profile from "./components/Profile/Profile";
import "./App.css";
import userData from "./data/userData.json";
import FriendList from "./components/friends/FriendList";
import friendsData from "./data/friendsData.json";
import TransactionHistory from "./components/transactionHistory/TransactionHistory";
import transactionHistory from "./data/transactionHistory.json";

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friendsData={friendsData} />
      <TransactionHistory items={transactionHistory} />
    </>
  );
}

export default App;
