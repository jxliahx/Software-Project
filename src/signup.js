import React, {useState} from "react";
import {useRef} from "react";
import { useForm } from "react-hook-form";
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye';
import {Link} from 'react-router-dom';


export default function Signup() {
    const { register, formState: { errors }, handleSubmit, watch} = useForm();
    const onSubmit = (data) => console.log(data);
    const pwd = watch('pwd');
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

    return (<div class="Container">
        <h1 class="s">Welcome to SGPM<ul class="member">Already a member? <Link to="/login">Login</Link></ul>
        </h1>
        <form class="signupBox" onSubmit={handleSubmit(onSubmit)}>
            <p>First Name: </p>
            <input {...register("fname", { required: true })} style={errors.fname && { border: "2px solid red" }}/>
            <p>Last Name: </p>
            <input {...register("lname", { required: true })} style={errors.lname && { border: "2px solid red" }}/>
            <p>Username:</p>
            <input {...register("uname", { required: true })} style={errors.uname && { border: "2px solid red" }}/>
            <p>Email:</p>
            <input {...register("email", { required: true, pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Email in incorrect format"
      }})} 
            style={errors.email && { border: "2px solid red" }}/>
            {errors.email && <error>{errors.email.message}</error>}
            <p>Password:</p>
            <input type={type} {...register("pwd", { required: true,minLength: {
        value: 8,
        message: "Password is less than 8 characters"
      } })} style={errors.pwd && { border: "2px solid red" }} />
            <span class="flex justify-around items-center" onClick={handleToggle}>
                  <Icon class="absolute mr-10" icon={icon} size={20}/>
              </span>
              {errors.pwd && <error>{errors.pwd.message}</error>}
            <p>Confirm Password:</p>
            <input type={type} {...register("cpwd", { required: true , validate: (value) => value === pwd || "Passwords don't match"})}
            style={errors.cpwd && { border: "2px solid red" }  }  />
            <span class="flex justify-around items-center" onClick={handleToggle}>
            <Icon class="absolute mr-10" icon={icon} size={20}/>
        </span>
              {errors.cpwd && <error>{errors.cpwd.message}</error>}
            <button class="sb" type="submit">Sign Up</button>
        </form>
    </div>
    )
}

