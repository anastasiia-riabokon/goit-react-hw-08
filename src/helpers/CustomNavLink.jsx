import clsx from "clsx";
import {NavLink} from "react-router-dom";

const CustomNavLink = ({to, children}) => {
  const buildLinkClass = ({isActive}) => {
    return clsx("hover:text-red-600", isActive && "text-red-600");
  };

  return (
    <NavLink to={to} className={buildLinkClass}>
      {children}
    </NavLink>
  );
};
export default CustomNavLink;
