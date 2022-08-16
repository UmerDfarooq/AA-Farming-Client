
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './ProductCards.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ProductCard({name,details,ImageSRC,ID}) {


  const onDelete = ()=>{
     axios.delete("http://localhost:5000/admin/product/"+ID).then((response)=>{
      alert('Card Deleted Successfully')
   
     }).catch((err)=>{
      alert('Card Not deleted'+err)
    
     })
    
  }
  return (
    <Card sx={{ maxWidth: 345 }} className='CardContainer'>
      <CardMedia
        component="img"
        alt={name}
        height="140"
        image= {ImageSRC}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {details}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onDelete}>Delete</Button>
      </CardActions>
    </Card>
  );
}