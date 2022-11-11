import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@mui/material';
import { AddShoppingCart} from '@mui/icons-material';

import './styles.css'

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
    


const Product = ({product}) => {
    // const classes = useStyles();
    return(
        <Card className='root'>
            <CardMedia image={product.image} title={product.name} className='cardMedia'/>
    
            <CardContent className='cardContent'>
                <div>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5">
                        {product.price}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {product.description}
                    </Typography>
                </div>
            </CardContent>
            <CardActions disableSpacing className='cardActions' >
                <IconButton aria-label="Add To Cart" style={{color: 'red'}}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    );
}
export default Product;