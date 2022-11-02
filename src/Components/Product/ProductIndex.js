import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

export const ProductIndex = () => {
  const [item, setItem] = useState([]);
  const fetchData = () => {
    axios
      .get(`https://dummyjson.com/products/category/mens-shoes/`)
      .then((res) => setItem(res.data));
  };

  useEffect(() => {
    fetchData();
  }, [setItem]);
  

  const { products } = item;
  
 
  return products?.map((data) => {
    const {id,
      thumbnail,
      title,
      price,
      
    } = data;
    

    return (
      <Link key={id} to={`/product/${id}`}>
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
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                {title}
              </Typography>
              <Typography variant='h3' color='text.secondary'>
                ${price}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    );
  });
};
