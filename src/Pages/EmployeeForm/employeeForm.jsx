import React,{ useState,useContext } from 'react'
import './employeeForm.css'
import axios from "axios";
import { Publish } from "@mui/icons-material";
import { UserContext } from '../../App';
import { Link, useNavigate } from 'react-router-dom';
import FileBase from 'react-file-base64';


export default function EmployeeForm() {
    const navigate=useNavigate();
	const{user,setUser} = useContext(UserContext);

    const [EmployeeName, setEmployeeName] = useState("");
    const [EmployeeExperty, setEmployeeExperty] = useState("");
    const [EmployeeDuration, setEmployeeDuration] = useState("");
    const [file, setFile] = useState("");
    const [onFile, setOnFile] = useState();

    const handleChange = (base64)=>{
        setOnFile(base64)
        setFile((base64))
        console.log('in here in files');
}
const onSubmitForm= (e)=>{
    e.preventDefault();
    console.log("in here")
    const formData = new FormData();
    formData.append('Image',file)
    formData.append('EmployeeName',EmployeeName)
    formData.append('EmployeeExperty',EmployeeExperty);
    formData.append('EmployeeDuration',EmployeeDuration);
    console.log('data appended')

    axios
    .post("https://aa-cattle-farm.herokuapp.com/admin/addEmployeeCard", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
    .then((response) => {
        console.log('in then')
        alert("form Successfully Submitted")
      
    })
    .catch((error) => {
      console.log('in error')
      console.log(error.response.data )
      if(error.response.status){
        alert('Please fill all the required fields')
      }
      else{
        alert(error)
      }
    
    });
  }

if(user){
    return (
        <>
        <div>
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-200">
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-12 col-lg-9 col-xl-7">
                        <div
                            className="card shadow-2-strong card-registration"
                            style={{
                                borderRadius: "15px",
                                backgroundColor: "ghostwhite",
                            }}
                        >
                            <div className="card-body p-4 p-md-5">
                                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">
                                    Employee Form
                                </h3>
                                <form class="was-validated">
                                    <div className="row">
                                        <div className="col-md-12 mb-4">
                                            <div className="form-outline">
                                                <label className="form-label" htmlFor="name" >
                                                   Employee Name
                                                </label>
                                                <input
                                                    type="textarea"
                                                    name="name"
                                                    placeholder="Enter Products Name"
                                                    className="form-control form-control-lg"
                                                    required="true"
                                                    value={EmployeeName}
                                                    {...console.log({EmployeeName})}
                                                    onChange={(e) => setEmployeeName(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12 mb-4">
                                            <div className="form-outline">
                                                <label className="form-label" htmlFor="experty">
                                                  Employee Experty
                                                </label>
                                                <input
                                                    type="textarea"
                                                    name="experty"
                                                    placeholder="Enter Product Description"
                                                    className="form-control form-control-lg"
                                                    required="true"
                                                    value = {EmployeeExperty}
                                                    onChange={(e) => setEmployeeExperty(e.target.value)}
                                                />

                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 mb-4">
                                            <div className="form-outline">
                                                <label className="form-label" htmlFor="experty">
                                                  Employee Duration
                                                </label>
                                                <input
                                                    type="textarea"
                                                    name="experty"
                                                    placeholder="Enter Product Description"
                                                    className="form-control form-control-lg"
                                                    required
                                                    value={EmployeeDuration}
                                                    onChange={(e) => setEmployeeDuration(e.target.value)}
                                                />

                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 mb-4">
                                            <div className="form-outline">
                                                <label htmlFor="file" >
                                                    <Publish className="userUpdateIcon" /> Upload Product Image
                                                </label>
                                                <FileBase type="file" multiple={false} onDone={({ base64 }) => {handleChange(base64)}} />
                                                <img src={onFile} alt="" width="250" height="200" className="imgSrc" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-center mt-4 pt-2">
                                        <input
                                            className="btn btn-primary btn-lg"
                                            type="submit"
                                            value="Submit"
                                            onClick={(e)=>{onSubmitForm(e)}}
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
    </>
    )
}
if(!user){
    return(
        <div>not authorized 
            <p>Press the Button to go back to home page</p>
            <Link to='/'><button>Press for Home</button></Link>
        </div>
        
    )
}
}
