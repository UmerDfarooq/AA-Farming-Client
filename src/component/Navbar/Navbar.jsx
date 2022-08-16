import React, { useContext, useState } from "react";
import { NavLink ,useNavigate} from "react-router-dom";
import { UserContext } from "../../App";
import './Navbar.css';



export const Navbar = () => {
    const{user,setUser} = useContext(UserContext);
const navigate = useNavigate();
    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const navToggle = () => {
      if (active === "nav__menu") {
        setActive("nav__menu nav__active");
      } else setActive("nav__menu");
  
      // Icon Toggler
      if (icon === "nav__toggler") {
        setIcon("nav__toggler toggle");
      } else setIcon("nav__toggler");
    };

    const logout = async()=>{
        const res = await fetch("https://aa-cattle-farm.herokuapp.com/admin/logout", {
            method: "GET",
            headers: {
              Accept:"applicatio/json",
              "Content-Type": "application/json",
            },
            credentials:'include'
          });
          if(res.status===200 || res.status===304){
            setUser(false);
            navigate('/')
          }
    }
    if(user){
        return(
            <nav className="nav">
        
        
            <ul className={active}>
            {/* { <NavLink exact to="/" className="nav-logo">
            Farming
            <i className="fas fa-code"></i>
          </NavLink> } */}
        
        
                <li className="nav__item">
                    <NavLink exact to="/" className="nav__link">
                        Home
                    </NavLink>
                </li>
                <li className="nav__item">
        
                    <NavLink exact to="/Employee" className="nav__link">
                        Employee
                    </NavLink>
                </li>
        
                <li className="nav__item">
                    <NavLink exact to="/Products" className="nav__link">
                        Product
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink exact to="/About" className="nav__link">
                        About
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink exact to="/Products/Form" className="nav__link">
                      Add Product
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink exact to="/Employee/Form" className="nav__link">
                       Add Employee
                    </NavLink>
                </li>
        
                <NavLink
                 exact
                 to="/Login"
                 activeClassName="active"
                 className="nav-links"
                 onClick={logout}
               >
                 Logout
               </NavLink>
            </ul>
            <div onClick={navToggle} className={icon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
            )
      
    }

    if(!user){
        return (
            <nav className="nav">
     
                <ul className={active}>
                {/* { <NavLink exact to="/" className="nav-logo">
                Farming
                <i className="fas fa-code"></i>
              </NavLink> } */}
     
                    <li className="nav__item">
                        <NavLink exact to="/" className="nav__link">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav__item">
     
                        <NavLink exact to="/Employee" className="nav__link">
                            Employee
                        </NavLink>
                    </li>
     
                    <li className="nav__item">
                        <NavLink exact to="/Products" className="nav__link">
                            Product
                        </NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink exact to="/About" className="nav__link">
                            About
                        </NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink exact to="/Login" className="nav__link">
                           Sign in
                        </NavLink>
                    </li>
                    
                </ul>
                <div onClick={navToggle} className={icon}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
             
       )
     }
}