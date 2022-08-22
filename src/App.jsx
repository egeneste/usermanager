import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import axios from 'axios'

import './App.css'
import UsersList from './componentes/UsersList'
import UsersForm from './componentes/UsersForm'



function App() {

  const URL = "https://users-crud1.herokuapp.com/users/"
  const [users, setUsers] = useState([])
  const [userToEdit, setUserToEdit] = useState()
  
  useEffect(() => {
    getAllUsers()
  }, []);

  // ** Function **
  const getAllUsers = async () => {
    let $users = await axios.get(URL)
    setUsers($users.data)
  }
  
  return (
    <div className="App">
      
      <UsersForm URL={URL} getAllUsers={getAllUsers} userToEdit={userToEdit} setUserToEdit={setUserToEdit}/>
      {users ? <UsersList users={users} URL={URL} getAllUsers={getAllUsers} setUserToEdit={setUserToEdit}/> : <></>}
    </div>
  )
}

export default App
