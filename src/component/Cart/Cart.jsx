import React from 'react'
import {Button, Typography, Grid, Container} from '@mui/material'
const Cart = ({cart}) => {
    const isEmpty = !cart.line_items.length;

    const EmptyCart = () => (
        <Typography variant='subtitle1'>Your cart is empty! <br/>
        Browse our categories and discover our best deals!</Typography>
    )
    
    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <div>{item.name}</div>
                    </Grid>
                ))} 
            </Grid>
            <div className="cardDetails">
                <Typography variant="h4">SubTotal: {cart.subtotal.formatted_with_symbol}</Typography>
                <Button className="EmptyButton" type='button' size='large' variant="contained" color='secondary'>Empty Cart</Button>
                <Button className="checkoutButton" type='button' size='large' variant="contained" color='primary'>Checkout</Button>

            </div>
        </>
    )
  return (
    <Container>
        <div className='toolbar' />
        <Typography variant='h3'>Your Shopping Cart</Typography>
        {isEmpty ? <EmptyCart/> : <FilledCart/>}
        </Container>
  );
}

export default Cart;












