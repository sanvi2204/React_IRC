import React from 'react'

const EditUser = () => {
  return (
    <>
        <form>
        <input type = 'text' id = 'username' placeholder='username'/>
        <input type = 'password' id = 'password' placeholder='password'/>
        <button type = 'submit' class = 'submit'>Add</button>
    </form>
    </>
  )
}

export default EditUser