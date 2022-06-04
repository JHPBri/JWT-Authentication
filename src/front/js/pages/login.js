import React, { useContext, useState } from  "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handClick = () => {

		const options = {
			method: "POST",
			body: JSON.stringify({
				"email": username,
				"password": password
			})
		}

		fetch('https://3000-jhpbri-jwtauthenticatio-3w062u5h4qh.ws-us46.gitpod.io/api/token/login', options)
			.then(resp =>{
				if(resp.status === 200) return resp.json();
			})
			.then()
			.catch(error => {
				console.error("error!",error)
			})
	}

	return (
		<div className="text-center mt-5">
			<h1>Login</h1>
			<div>
				<input type="text" placeholder="username" value = {username} onChange = {(e) => setUsername(e.target.value)}/>
				<input type="password" placeholder="password" value = {password} onChange = {(e) => setPassword(e.target.value)} />
				<button onClick ={handleClick}>Login</button>
			</div>

		</div>
	);
};
