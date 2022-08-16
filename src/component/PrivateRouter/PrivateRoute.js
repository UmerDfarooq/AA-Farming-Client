// import React, { useContext } from 'react';
// import { Route, Redirect, Navigate, useNavigate } from 'react-router-dom';
// import { UserContext } from '../../App';



// function PrivateRoute() {
//     const{user} = useContext(UserContext);
//     const navigate  = useNavigate();
//     const { component: Component, ...rest } = props;
    
//      if(user){
//         return ( <Route {...rest} render={(props) => 
//              (<Component {...props}/>)
//               }
//            />
//          )}
//     else{
//         return(
//             <div>Page UnAuthorized
//             </div>
//         )
//     }
//      //redirect if there is no user 
     
//   }


// export default PrivateRoute