import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import User from './User'

const UsersList = ({users, URL, getAllUsers, setUserToEdit}) => {

  
  // ** Hook **


  return (
    <div className='card-list'>
        {users.map(user => 
        
          <User  
              key={user.id} user={user} 
              URL={URL} 
              getUsers={getAllUsers} 
              setUserToEdit={setUserToEdit}
          />)}
    </div>
  )
}

export default UsersList