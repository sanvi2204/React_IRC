import { Button, FormControl, FormGroup, TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function SinginForm() {
    return (
        <div className="singin-form">
            <div className="form">
               <h1>Welcome To Hospital Management System</h1>
               <h3>Please Signin Now</h3>
                <FormGroup>
                    <FormControl>
                        <TextField
                        style={{margin:'10px 0px'}}
                        type="text"
                        required
                        id="outlined-required"
                        label="Login Id"
                    />
                    </FormControl>
                    <FormControl className="m">
                        <TextField
                        style={{margin:'10px 0px'}}
                        type="password"
                        required
                        id="outlined-required"
                        label="Password"
                    />
                    </FormControl>
                    <Link to="/dashboard"><Button style={{margin:'10px 0px'}} variant="contained">Login Now</Button></Link>
                </FormGroup>
            </div>
        </div>
    )
}
export default SinginForm
