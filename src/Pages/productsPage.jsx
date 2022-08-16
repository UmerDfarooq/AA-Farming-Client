import React, { useEffect,useState,useContext  } from 'react'

import { Grid } from '@mui/material';
import axios from "axios";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './productsPage.css'
import Box from '@mui/material/Box';
import { UserContext } from '../App';
import { Link, useNavigate } from 'react-router-dom';

export default function ProductsPage() {

  const navigate=useNavigate();
	const{user,setUser} = useContext(UserContext);
  const [data, setData] = useState([{}]);
  const [search, setSearch] = useState("");
  const [resultArray, setResultArray] = useState([{}]);
 
  

  const getData = async () => {
    const resp = await axios.get("https://aa-cattle-farm.herokuapp.com/admin/products");
    setData(resp.data);
    setResultArray(resp.data);
   
  }

  const onDelete = (ID)=>{
    setData(data.filter((item) => item._id!== ID));
    setResultArray(resultArray.filter((item) => item._id!== ID))
    axios.delete("https://aa-cattle-farm.herokuapp.com/admin/product/"+ID).then((response)=>{
     alert('Card Deleted Successfully')
  
    }).catch((err)=>{
     alert('Card Not deleted'+err)
   
    })
   
 }
 let value;
 const handleTextSearch = (e)=>{
  value = e.target.value;
  value.toUpperCase();
  console.log(value);
  setSearch(value);
  setResultArray(data.filter((item)=>item.ProductName.includes(value)))
  console.log(resultArray)
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
            alt={card.ProductName}
            height="140"
            image={card.Image}
           
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {card.ProductName}
            </Typography>
            <Typography variant="body3"component='div'>
            <Box fontWeight='fontWeightMedium'>{card.ProductDescription} </Box> 
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
            alt={card.ProductName}
            height="140"
            image={card.Image}
           
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {card.ProductName}
            </Typography>
            <Typography variant="body3"component='div'>
            <Box fontWeight='fontWeightMedium'>{card.ProductDescription} </Box> 
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
      <div className="container">
      <div className="row">
        <div className="col-lg-9 mt-2 mb-2">
        </div>
        <div className="col-lg-3 mt-2 mb-2">
          <input
            className="form-control"
            type="search"
            name="searchTerm"
            //  onChange={this.handleTextSearch}
            placeholder="Enter Product Name"
           onChange={(e)=>handleTextSearch(e)}
          ></input>
        </div>

        {/* <div className="d-flex justify-content-center mt-4 pt-2">
          <input
            className="btn btn-primary btn-lg"
            type="submit"
            value="Submit"
            onClick={handleSubmit}
          />
        </div> */}

        {/* {result.filter((val)=>{
          if(search==="")
            return val
          else if(val.name.includes(search)){
            console.log(val)
            return val
          }
        }).map((val,key)=>{
          return(
            <div key={key}>
              <h1>{val.name}</h1>
            </div>
          )
        })} */}
      </div>
      </div>
    <div >
    <Grid container spacing={2} className='gridContainer'>
      {resultArray.map(renderCard)}
    </Grid>
    </div>
    </div>
    
  )
}
