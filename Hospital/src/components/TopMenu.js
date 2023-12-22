import React from 'react'
import { Button, IconButton } from '@mui/material'
import DehazeIcon from '@mui/icons-material/Dehaze';
import { Link } from 'react-router-dom'

function TopMenu() {
    return (
        <div className="top-menu">
            <div className="navigation">
                <IconButton><DehazeIcon/></IconButton>
            </div>
            <div className="logo">
                <Link to="/dashboard"> <h2>SK Hospital</h2> </Link>
            </div>
            <div>
                <Button variant="contained" color='error'>LOGOUT</Button>
            </div>
        </div>
    )
}

export default TopMenu
