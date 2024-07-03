import CustomNavLink from "../../helpers/CustomNavLink";
import Theme from "../Theme/Theme";

const Navigation = () => {
  return (
    <li className="navbar-start flex gap-2 items-center">
      <CustomNavLink to="/">Home</CustomNavLink>
      <Theme />
    </li>
  );
};
export default Navigation;
