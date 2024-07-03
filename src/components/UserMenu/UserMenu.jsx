import CustomNavLink from "../../helpers/CustomNavLink";

const UserMenu = () => {
  return (
    <>
      <li className="navbar-end flex items-center gap-2">
        <CustomNavLink to="/contacts">Contacts</CustomNavLink>
        <button className="btn btn-outline">Log Out</button>
      </li>
    </>
  );
};
export default UserMenu;
