import React, {useState} from "react";
import {useRef} from "react";
import { useForm } from "react-hook-form";
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye';
import {Link} from 'react-router-dom';
//import {dotenv} from "dotenv/config";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import './signup.css';
import graphic from './graphic.png';


export default function Signup() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();
  const history = useHistory();
  axios.defaults.withCredentials = true;
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("http://localhost:5000/api/users/signup", data)
      .then((result) => {
        if (result.data.Status) {
          alert("Account created, please login");
          history.push("/login");
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };
  const password = watch("password");
  const [type, setType] = useState("pwd");
  const [icon, setIcon] = useState(eyeOff);
  const handleToggle = () => {
    if (type === "pwd") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("pwd");
    }
  };

  return (
    <div className="mBackgroundStrip">
    <div className="mBackgroundImage"></div>
    <div className="mPage mcenteredContent">
     
        <div className="mTitle">Welcome to SGPM
        <div className="mmember">
          Already a member? <Link to="/login" className="mlink">Login</Link>
        </div>
        </div>
      
      <div className="mContainer">
      <form className="msignupBox" onSubmit={handleSubmit(onSubmit)}>
        <p className='mLabels'>First Name: </p>
        <input className="minput"
          {...register("firstName", { required: true })}
          style={errors.fname && { border: "2px solid red" }}
        />
        <p className='mLabels'>Last Name: </p>
        <input className="minput"
          {...register("lastName", { required: true })}
          style={errors.lname && { border: "2px solid red" }}
        />
        <p className='mLabels'>Username:</p>
        <input className="minput"
          {...register("username", { required: true })}
          style={errors.uname && { border: "2px solid red" }}
        />
        <p className='mLabels'>Email:</p>
        <input className="minput"
          {...register("email", {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Email in incorrect format",
            },
          })}
          style={errors.email && { border: "2px solid red" }}
        />
        {errors.email && <error>{errors.email.message}</error>}
        <p className='mLabels'>Password:</p>
        <input className="minput"
          type={type}
          {...register("password", {
            required: true,
            minLength: {
              value: 8,
              message: "Password is less than 8 characters",
            },
          })}
          style={errors.pwd && { border: "2px solid red" }}
        />
        <span
          className="meye"
          onClick={handleToggle}
        >
          <Icon className="meye" icon={icon} size={20} />
        </span>
        {errors.pwd && <error>{errors.pwd.message}</error>}
        <p className='mLabels'>Confirm Password:</p>
        <input className="minput"
          type={type}
          {...register("cpwd", {
            required: true,
            validate: (value) => value === password || "Passwords don't match",
          })}
          style={errors.cpwd && { border: "2px solid red" }}
        />
        <span
          className="meye"
          onClick={handleToggle}
        >
          <Icon className="meye" icon={icon} size={20} />
        </span>
        {errors.cpwd && <error>{errors.cpwd.message}</error>}
        <button className="Button123" type="submit">
          Sign Up
        </button>
      </form>
      </div>
    </div>
    </div>
  );
}
