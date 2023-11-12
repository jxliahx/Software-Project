import "./landing.css";
import React, { useEffect, useState } from "react";
import NavigationBar from "./NavigationBar"; /* Add this at the top of your app.js file*/
import { useHistory } from "react-router-dom";
import axios from "axios";

function Landing() {
  const history = useHistory();
  axios.defaults.withCredentials = true;
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get(
        "http://localhost:5000/api/users/detail/" + localStorage.getItem("id")
      )
      .then((result) => {
        setUser(result.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container">
      <div className="sidebar">
        <NavigationBar />
      </div>

      <div className="nav">
        {" "}
        Welcome {user.FirstName} {user.LastName}!
      </div>

      <div className="main">
        {" "}
        Upcoming Deadlines
        <ul className="list">
          <section>
            <li>Project1</li>
            <li>Project2</li>
          </section>
        </ul>
      </div>

      <div className="content1">
        {" "}
        Current Projects
        <ul className="list">
          <section>
            {" "}
            My Projects:
            <li>Project1</li>
            <li>Project2</li>
          </section>
        </ul>
        <ul className="list">
          <section>
            {" "}
            Shared With Me:
            <li>Project3</li>
            <li>Project4</li>
          </section>
        </ul>
      </div>
      <div className="content2">content2</div>
    </div>
  );
}
export default Landing;
