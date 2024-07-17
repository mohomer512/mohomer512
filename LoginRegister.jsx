import React from 'react';
import { Link } from "react-router-dom"
import './LoginRegister.css';
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import styled from 'styled-components';

const FormContainer = styled.form`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
    
form .icon{
    position: absolute;
    right:20px ;
    top: 50%;
    translate: 0 -50%;
    font-size: 16px;



}



    `;




const LoginRegister = () => {
    return (
<div className="container my-4">
    <div className='row'>
    <div className="col-md-8 mx-auto rounded border p-4">
    <h2 className="text-center mb-5">Login</h2>

        <form action="">
        <FormContainer>
            <h1>Login</h1>
            <div className="col-sm-8">
                <input type="text" className="form-control" placeholder='Username' required/>
                <FaUserAlt className= 'icon'/>
                </div>
            <div className="col-sm-8">
              <input type="text" className="form-control" placeholder='Password' required/>
                <FaLock  className= 'icon' />
            </div>
            <div className="row">
            <div className="offset-sm-4 col-sm-4 d-grid">
            <div className="remember-forgot">
                <label><input type="checkbox" />remember me </label>
                <a href="#">Forgot password</a>
            </div>
            
            <button  className="btn btn-primary" type="submit" >Login</button>
        <div className="register-link">
            <p>Don't have an account ? <a href="#">Register</a> </p>
            </div>
        </div>
        </div>
        </FormContainer>
        </form>
        
        </div> 
</div>
</div>

    );

};

export default LoginRegister;
