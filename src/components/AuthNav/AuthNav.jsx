import CustomNavLink from "../../helpers/CustomNavLink";

const AuthNav = () => {
  return (
    <>
      <li className="navbar-end space-x-2">
        <CustomNavLink to="/login">Login</CustomNavLink>
        <CustomNavLink to="/register">Register</CustomNavLink>
      </li>
    </>
  );
};
export default AuthNav;
