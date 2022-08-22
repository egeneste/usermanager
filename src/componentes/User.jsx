import React from 'react'
import axios from 'axios'


const User = ({user, URL, getUsers, setUserToEdit}) => {

  const deleteUser =  async (e) => {
    e.preventDefault()
    await axios.delete(`${URL}${user.id}/`)
    getUsers()
  }

  const editUser = (e) => {
    e.preventDefault()
    setUserToEdit(user)
  }
  return (
    <div className="card">

        <p className="card-name">{user.first_name}</p>
        <p className="card-name">{user.last_name}</p>
        <hr />
        <p className="card-subtitle">CORREO</p>
        <p className="card-info">{user.email}</p>
        <p className="card-subtitle">CUMPLEANOS</p>
        <div className='gift'>
            <img src="/gift_box.png" alt="gift" />
            <p className="card-info date">{user.birthday}</p>
        </div>
        <hr />
        <button className="btn edit" onClick={editUser}><img src="/edit.svg" alt="" /></button>
        <button className="btn delete" onClick={deleteUser}><img src="/delete.svg" alt="" /></button>
    </div>
  )
}

export default User