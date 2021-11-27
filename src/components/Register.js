import React,{useState} from 'react'

function Register() {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    async function registerUser(event){
    event.preventDefault()
        // console.log(name);
		const response = await fetch('http://localhost:4000/p/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({name,email,password}),
		})

		const data = await response.json();
        console.log("new user data :- ",data);
    }

    return (
        <div>
            inside register
            <form onSubmit = {registerUser}>
                <input type='text' value ={name} onChange= {(e) =>{setName(e.target.value)}} placeholder = 'Enter your name'/><br />
                <input type='text' value ={email} onChange= {(e) =>{setEmail(e.target.value)}} placeholder = 'Enter your email here'/> <br />
                <input type='text' value ={password} onChange= {(e) =>{setPassword(e.target.value)}} placeholder = 'Enter your Password'/><br />
                <input type="submit" value="Register" />
            </form>
        </div>
    )
}

export default Register;
