import React from "react";
import { AppBar, Toolbar, IconButton, Badge, Typography, Menu, MenuItem } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material"; 

import logo from '../../assets/commerce.png';


const Navbar =() =>{
    
    return(
        <AppBar position="fixed" className='appbar' color='inherit'>
            <Toolbar>
                <Typography variant="h6" className="title" color='inherit'>
                    <img src={logo} alt="commerce.jsx" height='20px' className='appbar.image'/>
                    shopNet
                </Typography>
                <div className="grow"/>
                <div className="button">
                    <IconButton aria-label="Show cart items" color='inherit' style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '10px 20px',}}>
                        <Badge badgeContent={2} color='primary' >
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
}
export default Navbar;