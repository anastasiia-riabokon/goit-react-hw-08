import {NavLink} from "react-router-dom";

const CustomNavLink = ({path, children}) => {
  const buildLinkClass = ({isActive}) => {
    return clsx("hover:text-red-600", isActive && "active");
  };

  return (
    <NavLink to={path} className={buildLinkClass}>
      {children}
    </NavLink>
  );
};
export default CustomNavLink;
