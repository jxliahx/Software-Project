import React, {useState} from "react";
import { useForm } from "react-hook-form";
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./login.css";

export default function Login() {
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
      .post("http://localhost:5000/api/users/login", data)
      .then((result) => {
        console.log(result.data);

        if (result.data.loginStatus) {
          localStorage.setItem("id", result.data.id);
          history.push("/landing");
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);
  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };
  return (
    <div className="bBackgroundStrip">
    <div className="bBackgroundImage"></div>
    <div className="ContainerK">
      <div className="wb">Welcome Back!</div>
      <form className="bloginBox" onSubmit={handleSubmit(onSubmit)}>
        <p className='bLabels'>Username:</p>
        <input className="binput"
          {...register("username", { required: true })}
          style={errors.uname && { border: "2px solid red" }}
        />
        <p className='bLabels'>Password:</p>
        <input className="binput"
          type={type}
          {...register("password", {
            required: true,
            minLength: {
              value: 8,
              message: "Password is less than 8 characters",
            },
          })}
          style={errors.password && { border: "2px solid red" }}
        />
        <span
          className="flex justify-around items-center"
          onClick={handleToggle}
        >
          <Icon className="absolute mr-10" icon={icon} size={20} />
        </span>
        {errors.password && <error>{errors.password.message}</error>}
        <button className="Button321" type="submit">
          Login
        </button>
        <p className="nm">
          Not a member?<Link to="/signup">Sign Up Here</Link>
        </p>
      </form>
    </div>
    </div>
  );
}