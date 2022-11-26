import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@mui/material';
import { AddShoppingCart} from '@mui/icons-material';

import './styles.css'

 //import useStyles from './styles' 

// maxWidth: 345, original width style
// const CardStyles = styled.Card`
//     maxWidth: 100%;
//     background: red;

//     CardMedia: {
//         height: 0;                                                                                                                                               
//         paddingTop: '56.25%'; // 16:9
//     }

//     CardActions: {
//         display: flex;
//         justifyContent: flex-end;
//     }

//     CardContent: {
//         display: flex;
//         justifyContent: space-between;
//         color: blue;
//     }
// `;
    


const Product = ({product, onAddToCart}) => {
    // const classes = useStyles();
    return(
        <Card className='root'>
            <CardMedia image={product.image.url} title={product.name} className='cardMedia'/>
    
            <CardContent className='cardContent'>
                <div>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5">
                        {product.price.formatted_with_symbol}
                    </Typography>
                    <Typography dangerouslySetInnerHTML={{ __html: product.description}} variant="body1" color="textSecondary" />
                </div>
            </CardContent>
            <CardActions disableSpacing className='cardActions' >
                <IconButton aria-label="Add To Cart" style={{color: 'red'}} onClick={() => onAddToCart(product.id, 1)}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    );
}
export default Product;