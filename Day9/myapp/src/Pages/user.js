import React from 'react'
import { useState } from 'react'
import { getUser } from '../services/api'

const Users = () => {

    const [user,setUser] = useState([])

    const fetchData=async()=>{
        
        try{
            await getUser()
        }
        catch(e){
            console.log(e)
        }
        

    }
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>
                            Username
                        </th>
                        <th>
                            Password
                        </th>
                        <th>
                            Edit
                        </th>
                        <th>
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Zaynaa</td>
                        <td>1234</td>
                        <td>
                            <button className='edit'>Edit</button>
                        </td>
                        <td>
                            <button className='del'>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Users