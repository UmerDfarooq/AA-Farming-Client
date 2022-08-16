import React, { useContext, useState } from 'react'
import './login.css'
import { UserContext } from '../../App';
import { useNavigate } from 'react-router-dom';

const login = () => {
	const navigate=useNavigate();
	const{user,setUser} = useContext(UserContext);
	const [fields, setFields] = useState({ email: "", password: "" });
	let name, value;
	

	const handleInput = (e) => {
		name = e.target.name;
		value = e.target.value;
		setFields({ ...fields, [name]: value });
	};

	const sendData = async (e) => {
		e.preventDefault(); // to pervent reloading issues.
		const { email, password } = fields; // its object decontructuring.
		console.log(user);
		const res = await fetch("https://aa-cattle-farm.herokuapp.com/admin/Login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email,
				password,
			}),
			credentials: "include",
		});
		const data = await res.json();
		if (res.status === 422) {
			alert(data.message)
		}
		if (res.status === 200) {
			alert(data.message);
			console.log(user)
			setUser(true);
			console.log(user);
			navigate('/')
			
		}
	};
	return (
		<>
			<div className="background ">
				<div className="login">

					<h2> Sign in </h2>
					<form>
						<label>ENTER EMAIL</label>
						<input type="email"
							name="email"
							value={fields.email}
							onChange={handleInput} /><br></br>

						<label>PASSWORD</label>
						<input className='pass'
							type="password"
							name="password"
							value={fields.password}
							onChange={handleInput} />

						<br></br>
						<button className="signin" onClick={sendData}>
							Sign In
						</button>


					</form>
				</div>
			</div>

		</>
	)
}

export default login