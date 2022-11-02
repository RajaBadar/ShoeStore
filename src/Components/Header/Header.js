import React from "react";
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { MenuItem } from "@mui/material";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:"orange"}}>
        <Toolbar >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ShoeStore
          </Typography>
          <Link to='/' style={{ textDecoration: 'none',color:"white" }} ><MenuItem style={{paddingLeft: 13}}>Home</MenuItem></Link>
        <Link to='/product' style={{ textDecoration: 'none',color:"white" }}><MenuItem style={{paddingLeft: 13}}>Products</MenuItem></Link>
        <Link to='/about' style={{ textDecoration: 'none',color:"white" }}><MenuItem style={{paddingLeft: 13}}>About</MenuItem></Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

    
  


export default Header;
