import { NavLink } from "react-router-dom";

const NavItems = () => {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      {/* <NavLink to="/how-it-works">How it works</NavLink> */}
      <NavLink to="/assignments">Assignments</NavLink>
      <NavLink to="/submitted-assignments">Submitted</NavLink>
      <NavLink to="/my-submitted-assignments">My Assignments</NavLink>
    </>
  );
};

export default NavItems;
