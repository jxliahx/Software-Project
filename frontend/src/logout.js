import { Link } from "react-router-dom";
import graphic from "./graphic.png";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function Logout() {
  const history = useHistory();
  axios
    .get("http://localhost:5000/api/users/logout", { withCredentials: true })
    .then((result) => {
      console.log(result);
      if (result.data.Status) {
        localStorage.removeItem("id");
        history.push("/");
      } else {
        alert(`${result.data.Status}`);
      }
    })
    .catch((err) => console.log(err));
}
