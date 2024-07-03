import {useDispatch, useSelector} from "react-redux";
import CustomNavLink from "../../helpers/CustomNavLink";
import {selectUser} from "../../redux/auth/selectors";
import {logoutThunk} from "../../redux/auth/operations";

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <>
      <li className="navbar-center space-x-2">
        <p>{user.email}</p>
      </li>
      <li className="navbar-end flex items-center gap-2">
        <CustomNavLink to="/contacts">Contacts</CustomNavLink>
        <button className="btn btn-outline" type="submit" onClick={() => dispatch(logoutThunk())}>
          Log Out
        </button>
      </li>
    </>
  );
};
export default UserMenu;
