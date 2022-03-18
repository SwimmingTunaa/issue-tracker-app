import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.scss';

async function loginUser(credentials){
  
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(data => data.json())
   
}

function Login({setToken})
{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async e =>
    {
        e.preventDefault();
        const token = await loginUser({ username, password });
        setToken(token); //set oken if using server/API       t 
    }

    return (
        <section className='login-wrapper'>
            <div className='login'>
                <h1>Issue Tracker</h1>
                <form onSubmit={handleSubmit} >
                    <label>
                        <i class="fa-solid fa-user"></i>
                        <input
                            type="text"
                            placeholder='Username'
                            onChange={e => setUsername(e.target.value)}
                        />
                    </label>
                    <label>
                        <i class="fa-solid fa-lock"></i>
                        <input
                            type="password"
                            placeholder='Password'
                            onChange={e => setPassword(e.target.value)}
                        />
                    </label>
                    <div>
                        <button className='accent-button' type="submit">Log In</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login
