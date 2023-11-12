import { Link } from "react-router-dom";

export const AppNav = () => {
  return (
    <>
      <Link to="/" children="tempHome " />
      <Link to="/createPage" children="createPage" />
    </>
  );
};