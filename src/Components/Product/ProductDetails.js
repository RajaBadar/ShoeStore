import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const ProductDetails = () => {
 
 
  const {id} = useParams()
  
  const [product,setProduct] = useState()
  
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [setProduct]);

  const fetchData = () => {
    
      fetch(`https://dummyjson.com/products/category/mens-shoes/`)
      .then((res) => res.json())
      .then((data) => {
        const newProduct = data.products.find((data)=> data.id === parseInt(id))
        if(newProduct){
        setProduct(newProduct)
      }
    }  )
        
       
      
  };
  const {thumbnail,description,discountPercentage,title,stock,price,brand,category,rating} = product

  
  

   return (
      <div >
         <Card
          key={id}
          sx={{ maxWidth: 345, margin: 10, display: "inline-grid" }}
        >
          
          <CardActionArea>
            <CardMedia
              component='img'
              height='345'
              image={thumbnail}
              alt='Shoe'
            />
          <Typography gutterBottom variant='h4' component='div'>
                {title}
              </Typography>
            <CardContent>
              <Typography gutterBottom variant='h4' component='div'>
                {brand}
              </Typography>
              <Typography gutterBottom variant='h4' component='div'>
                {category}
              </Typography>
              <Typography gutterBottom variant='p' component='div'>
                {description}
              </Typography>
              <Typography gutterBottom variant='h5' component='div'>
                Discount: {discountPercentage}%
              </Typography>
              <Typography gutterBottom variant='h5' component='div'>
                Available: {stock} pairs
              </Typography>
              <Typography variant='h3' color='text.secondary'>
                Price : ${price}
              </Typography>
              <Typography variant='h6' color='text.secondary'>
                Ratings : {rating}/5
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
     )
  
      
}




export default  ProductDetails