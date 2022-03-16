import React from 'react';
import './Login.scss';

function Login()
{
    return (
        <section className='login-wrapper'>
            <div className='login'>
                <h1>Please Log In</h1>
                <form >
                    <label>
                        <p>Username</p>
                        <input type="text" />
                    </label>
                    <label>
                        <p>Password</p>
                        <input type="password" />
                    </label>
                    <div>
                        <button type="submit">Log In</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Login
