import React,{useState} from 'react'

//Points to remember
//1.Check if the user is logged in or not to access protected route - like profile -----not implemented
        //Check Products project from udemy in auth_controller.js - checkUser function - Line 78 
//2.I have not impleted a logout or token expiry which is easy tough


function Login() {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    async function LoginUser(event){
    event.preventDefault()
        // console.log(name);
		const response = await fetch('http://localhost:4000/p/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({email,password}),
		})

		const data = await response.json();
        //console.log("new user data :- ",data,data.Token);

        if(data.Token){
            //means i get i JWT token back from backend validation if the user is valid or not
            //So the user is valid
            alert("Login Successful");
            window.location.href='/profile';
        }else{
            alert('Please check username and passowrd');
            console.log('incorrect Credentials')
        }

    }

    return (
        <div>
            inside Login
            <form onSubmit = {LoginUser}>
                <input type='text' value ={email} onChange= {(e) =>{setEmail(e.target.value)}} placeholder = 'Enter your email here'/> <br />
                <input type='text' value ={password} onChange= {(e) =>{setPassword(e.target.value)}} placeholder = 'Enter your Password'/><br />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Login;
