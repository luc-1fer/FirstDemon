import React from "react";
import validate from './validation.js'
import './form.module.css'

export default function Form (props){
    const [userData, setUserData] = React.useState({ 
        username: '', 
        password: '' });

        const [errors, setErrors] = React.useState({
            username: '',
            password: ''  
        });

    const handleInputChange = (event)=>{
        const property = event.target.name 
        const value = event.target.value  
    setUserData({
        ...userData,
        [property]: value
    })
    setErrors(validate(userData));
    }

    const handleSubmit = (event)=> {
        event.preventDefault();
        props.login(userData)
    }



    return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" value={userData.username} onChange = {handleInputChange} className={errors.username && 'warning'}/>
            {errors.username && <p className='danger'>{errors.username}</p>}

            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={userData.password} onChange = {handleInputChange} className={errors.password && 'warning'}/>
            {errors.password && <p className='danger'>{errors.password}</p>}

            <button>LOGIN</button>
        </form>
    </div>
    )
}