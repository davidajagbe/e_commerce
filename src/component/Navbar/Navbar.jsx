import React from "react";
import { AppBar, Toolbar, IconButton, Badge, Typography, Menu, MenuItem } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material"; 

import logo from '../../assets/commerce.png';
import './styles.css'

const Navbar =({ totalItems }) =>{
    
    return(
        <AppBar position="fixed" className='appBar' color='inherit'>
            <Toolbar>
                <Typography variant="h6" className="title" color='inherit'>
                    <img src={logo} alt="commerce.jsx" height='20px' className='image'/>
                    shopNet
                </Typography>
                <div className="grow"/>
                <div className="button">
                    <IconButton aria-label="Show cart items" color='inherit' >
                        <Badge badgeContent={totalItems} color='secondary' >
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
}
export default Navbar;