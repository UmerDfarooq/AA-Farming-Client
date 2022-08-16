import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import  Index  from './component/index';
import { Navbar } from './component/Navbar/Navbar';
import ProductCard from './component/ProductCard/ProductCard';
import {Grid} from '@mui/material'
import ProductsPage from './Pages/productsPage';
import ProductForm from './Pages/ProductForm/ProductForm';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeForm from './Pages/EmployeeForm/employeeForm';
import EmployeesPage from './Pages/EmployeePage/employeesPage';
import Login from './Pages/Login/login'
import AboutPage from './Pages/AboutPage/aboutPage';
import GoogleMaps from './Pages/GoogleMaps/googleMaps';
import GoogleMapsSecond from './Pages/GoogleMaps/googleMapsSecond';
import React,{ createContext, useState,useEffect } from 'react';
import { useCookies } from "react-cookie";
import { Cookie } from '@mui/icons-material';
import PrivateRoute from './component/PrivateRouter/PrivateRoute';

export const UserContext = createContext();

function App() {
  
  const[user,setUser] = useState(false);
  console.log(user);

  const getData=async()=>{
    let res = await fetch("https://aa-cattle-farm.herokuapp.com/admin", {
        method: "GET",
        headers: {
          Accept:"applicatio/json",
          "Content-Type": "application/json",
        },
        credentials:'include'
      });
      if(res.status===200|| res.status===304){
        setUser(true);
      }
}
  useEffect(()=>{getData(),[]})
  return (
<Router>

<div >
<UserContext.Provider value={{user,setUser}}>
  <Navbar/>
  <div className='bucket'>
    
  <Routes>

<Route exact path="/" element={<Index />} />
<Route exact path='/Products' element={<ProductsPage />} />
<Route exact path='/Products/Form' element={<ProductForm/>} />
<Route exact path='/Employee/Form' element={<EmployeeForm/>} />
<Route exact path='/Employee' element={<EmployeesPage/>} />
<Route exact path='/Login' element={<Login/>} />
<Route exact path='/About' element={<AboutPage/>} />
<Route exact path='/Maps' element={<GoogleMaps/>}/>


</Routes>

  


</div>
</UserContext.Provider>
</div>

</Router>

);
}

export default App;
