import React, {useState} from "react";
import { useForm } from "react-hook-form";
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye';
import { Link } from 'react-router-dom';
import './KFstyle.css';


export default function Login() {
    const { register, formState: { errors }, handleSubmit, watch} = useForm();
    const onSubmit = (data) => console.log(data);
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);
    const handleToggle = () => {
    if (type==='password'){
       setIcon(eye);
       setType('text')
    } else {
       setIcon(eyeOff)
       setType('password')
    }
 }
    return (
        <div class="ContainerK">
            <h1 class="wb">Welcome Back!</h1>
            <form class="loginBox" onSubmit={handleSubmit(onSubmit)}>
                <p>Username:</p>
                <input  {...register("uname", { required: true,})} style={errors.uname && { border: "2px solid red" }}/>
                <p>Password:</p>
                <input type={type} {...register("pwd", { required: true,  minLength: {
        value: 8,
        message: "Password is less than 8 characters"}})}style={errors.pwd && { border: "2px solid red" }}/>
                <span class="flex justify-around items-center" onClick={handleToggle}>
                  <Icon class="absolute mr-10" icon={icon} size={20}/>
              </span>
              {errors.pwd && <error>{errors.pwd.message}</error>}
              <Link to="/Landing" type="submit"><button onPress={handleSubmit(onSubmit)} type="submit" class="lb">Login</button></Link>
                <p class="nm">Not a member?<Link to="/signup">Sign Up Here</Link></p>
            </form>
        </div>
    )
}