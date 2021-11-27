import React,{useState} from 'react'

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
        console.log("new user data :- ",data);
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
