import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import { UserList } from './components/Users/UserList';

function App() {
  const [users, setUsers] = useState([]);

  const usersHandler = (newUser) =>{
    setUsers(prevUsers => {
      return [...prevUsers, newUser]
    })
  }

  return (
    <>
      <AddUser handleUsersChange={usersHandler}/>
      <UserList users={users}/>
    </>
  );
}

export default App;
