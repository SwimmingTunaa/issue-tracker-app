import { useState } from "react";

export default function useToken()
{  
    const getToken = () =>{
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken?.token;
    }

    const [token, setToken] = useState(getToken());

    const saveToken = userToken =>
    {
        localStorage.setItem('token',  Math.floor(Math.random() * 999999));
        //if using local server
        setToken(userToken.token);
    }

    return { setToken: saveToken, token };
}