import React from 'react'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const UsersForm = ({URL, getAllUsers, userToEdit, setUserToEdit}) => {
  const [formVisible, setFormVisible] = useState(true)
  const {register, handleSubmit, reset} = useForm()

  const cleanUser = {
    "first_name": "",
    "last_name": "",
    "email": "",
    "password": "",
    "birthday": ""
}

  useEffect(()=> {
    if (userToEdit){
        reset(userToEdit)
    }
  }, [userToEdit])



  // *** Function    ***
  const showHide_form = () => {
    setFormVisible(!formVisible)
    setUserToEdit()
  }

  const uploadData = async(data) => {
    showHide_form()
    await axios.post(URL, data)
    getAllUsers()
    reset(cleanUser)

  }

  const updateData = async (data) => {
    showHide_form()
    const $URL = `${URL}${data.id}/`
    await axios.patch($URL, data)
    getAllUsers()
    reset(cleanUser)
  }
  
  return (
    <>
    {
        userToEdit ?
        <div className='UserForm'>
            <form action="" onSubmit={handleSubmit(updateData)}>
                <p className="close" onClick={showHide_form}>X</p>
                <p className="title">New User</p>
                <div className="form-input">
                    <img src="" alt="" />
                    <input type="text" {...register('first_name')} className="form_username" placeholder='first name'/>
                    <input type="text" {...register('last_name')} className="form_username" placeholder='last name'/>
                </div>
                <div className="form-input">
                    <img src="" alt="" />
                    <input type="text" {...register('email')} className="form_username" placeholder='email'/>
                </div>
                <div className="form-input">
                    <img src="" alt="" />
                    <input type="password" {...register('password')} className="form_username" placeholder='password'/>
                </div>
                <div className="form-input">
                    <img src="" alt="" />
                    <input type="date" {...register('birthday')} className="form_username" placeholder='mm/dd/yyyy'/>
                </div>
                <input type="submit" className='btn-form' value="Update" />
            </form>
        </div>:
        formVisible ?
        <header>
            <button className='register' onClick={showHide_form}>Create User</button>
        </header>
        :
        <div className='UserForm'>
            <form action="" onSubmit={handleSubmit(uploadData)}>
                <p className="close" onClick={showHide_form}>X</p>
                <p className="title">New User</p>
                <div className="form-input">
                    <img src="" alt="" />
                    <input type="text" {...register('first_name')} className="form_username" placeholder='first name'/>
                    <input type="text" {...register('last_name')} className="form_username" placeholder='last name'/>
                </div>
                <div className="form-input">
                    <img src="" alt="" />
                    <input type="text" {...register('email')} className="form_username" placeholder='email'/>
                </div>
                <div className="form-input">
                    <img src="" alt="" />
                    <input type="password" {...register('password')} className="form_username" placeholder='password'/>
                </div>
                <div className="form-input">
                    <img src="" alt="" />
                    <input type="date" {...register('birthday')} className="form_username" placeholder='mm/dd/yyyy'/>
                </div>
                <input type="submit" className='btn-form' value="Upload" />
            </form>
        </div>
    }
    </>
  )
}

export default UsersForm