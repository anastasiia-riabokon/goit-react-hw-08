import clsx from "clsx";
import {NavLink} from "react-router-dom";

const CustomNavLink = ({to, children}) => {
  const buildLinkClass = ({isActive}) => {
    return clsx(
      "hover:text-red-600 max-[767px]:text-[18px] transition-color duration-[250ms]",
      isActive && "text-red-600"
    );
  };

  return (
    <NavLink to={to} className={buildLinkClass}>
      {children}
    </NavLink>
  );
};
export default CustomNavLink;
