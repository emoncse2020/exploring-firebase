import { NavLink } from "react-router";

const Home = () => {
  return (
    <div>
      <NavLink style={{ marginRight: "20px" }} to={"/"}>
        Home
      </NavLink>
      <NavLink to={"/login"}>Login</NavLink>
    </div>
  );
};

export default Home;
