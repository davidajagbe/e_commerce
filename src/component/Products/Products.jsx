import React from 'react';
import  {Grid}  from '@mui/material';
import Product from './Product/Product';

import './styles.css';
const products = [
  {id: 1, name: 'Shoes', description: "Running Shoes.", price: '$5', image: './download (1).jpg'},
  {id: 2, name: 'Macbook', description: "Apple Macbook.", price: '$10' },
  {id: 3, name: 'Iphone', description: "Iphone 7.", price: '$12' },
  {id: 4, name: 'Kettle', description: "Airbnb Kettle.", price: '$20' },
  {id: 5, name: 'Shoes', description: "Running Shoes.", price: '$5' },
  {id: 6, name: 'Macbook', description: "Apple Macbook.", price: '$10' },
  {id: 7, name: 'Iphone', description: "Iphone 7.", price: '$12' },
  {id: 8, name: 'Kettle', description: "Airbnb Kettle.", price: '$20' },


]
const Products = () => {

  return(
    <main className='content'>
      <div className='toolbar'/>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product}/>
          </Grid>
        ))}
      </Grid>
    </main>
  );
}

export default Products;