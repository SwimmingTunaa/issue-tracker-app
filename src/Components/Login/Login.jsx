import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.scss';
import axios from 'axios';

async function loginUser(user){
    
    const data = await axios(
        {
            method: "post",
            url: "https://swimmingtuna-issue-tracker.netlify.app/.netlify/functions/data",
            body: JSON.stringify(user),
        }
    )
    console.log(data);
    return data
}

function Login({setToken ,username, setUsername})
{

    const [password, setPassword] = useState("");

    const handleSubmit = async e =>
    {
        e.preventDefault();
        const data = await loginUser({ username, password });  
        setToken(data.data.token)
    }

    return (
        <section className='login-wrapper'>
            <div className='login'>
                <div className='flex-c jcc aic width-100'>
                    <i className="fa-solid fa-5x fa-bug-slash logo"></i>
                    <h1>Issue Tracker</h1>
                </div>
                <form
                    name='login'
                    onSubmit={handleSubmit}
                    method="POST"
                    data-netlify="true"
                >
                    <label>
                        <i className="fa-solid fa-user"></i>
                        <input
                            autoFocus
                            type="text"
                            placeholder='Username'
                            onChange={e => setUsername(e.target.value)}
                        />
                    </label>
                    <label>
                        <i className="fa-solid fa-lock"></i>
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
