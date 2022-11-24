import React, { useEffect,useState,useContext } from 'react'

import { Grid } from '@mui/material';
import axios from "axios";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import './employeesPage.css'
import { UserContext } from '../../App';
import { Link, useNavigate } from 'react-router-dom';


export default function EmployeesPage() {
  const navigate=useNavigate();
	const{user,setUser} = useContext(UserContext);
  const [data, setData] = useState([{}]);

  const getData = async () => {
    const resp = await axios.get("https://aa-cattle-farm.herokuapp.com/admin/employee")
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].Image);
    }
    setData(resp.data);
  }

  const onDelete = (ID)=>{
    setData(data.filter((item) => item._id!== ID));
    axios.delete("https://aa-cattle-farm.herokuapp.com/admin/employee/"+ID).then((response)=>{
     alert('Card Deleted Successfully')
  
    }).catch((err)=>{
     alert('Card Not deleted'+err)
   
    })
   
 }
  useEffect(() => {
    getData();
  }, [])

  const renderCard = (card, index) => {
    if(user){
    return (
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ maxWidth: 345 }} className='CardContainer'>
          <CardMedia
            component="img"
           
            height="140"
            image={card.Image}
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {card.EmployeeName}
            </Typography>
            <Typography variant="body3"component='div'>
               <Box fontWeight='fontWeightMedium'>{card.EmployeeExperty} </Box> 
            </Typography>
            <Typography variant="body3" component="div" >
            {card.EmployeeDuration}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="medium" onClick={()=>onDelete(card._id)}>Delete</Button>
          </CardActions>
        </Card>
      </Grid>
    )
  }
  if(!user){
    return(
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ maxWidth: 345 }} className='CardContainer'>
          <CardMedia
            component="img"
           
            height="140"
            image={card.Image}
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {card.EmployeeName}
            </Typography>
            <Typography variant="body3"component='div'>
               <Box fontWeight='fontWeightMedium'>{card.EmployeeExperty} </Box> 
            </Typography>
            <Typography variant="body3" component="div" >
            {card.EmployeeDuration}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    )
  }
}
  if (!Array.isArray(data) || data.length <= 0) {
    return null;
  }
  return (
    <div className='bg-img'>
    <Grid container spacing={2} className='gridContainer'>
      {data.map(renderCard)}
    </Grid>
    </div>
    
  )
}
