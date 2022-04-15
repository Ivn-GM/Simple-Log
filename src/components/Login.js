import React, { useState } from 'react';
import Welcome from './Welcome';

const Login = () => {
    const [login, setLogin] = useState({
        user: "",
        password: ""
    });

   
    const {user, password} = login;

    const [logged, setLogged] = useState(null);

  
    const initialValue = {
        user: "Ivan",
        password: "1234"
    }


    let onChange = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value        
        });        
    };  

    let handleSubmit = (e) => {
        e.preventDefault();
        if (user === initialValue.user && password === initialValue.password) {
            return setLogged(true);
        } else {
          return setLogged(false);
        }       
    };

    const form = (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <label className="user">User</label>
                <br />
                <input className="inputUser" type="text" name="user" onChange={onChange}></input>
                <br />
                <label className="passw">Password</label>
                <br />
                <input className="inpuPassw" type="password" name="password" onChange={onChange}></input>
                <br />   
                <button type='submit'>LOGIN</button>       
            </form>  
            {logged === false && (
                <p style={{ color: "red" }} >User or password incorrect</p>
            )}
        </div>
    );

    
    return (
        <div className="log">
            {logged ? <Welcome user={user} /> : form}
        </div>
    );
}

export default Login;