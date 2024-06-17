import Profile from './components/Profile/Profile'
import './App.css'
import userData from './data/userData.json'
import FriendList from './components/friends/FriendList'
import friendsData from './data/friendsData.json'

function App() {

  return (
    <>
     <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats} />
      
      <FriendList friendsData={friendsData}/>
      </>
  )
  
}

export default App
