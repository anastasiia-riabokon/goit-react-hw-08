import {useDispatch, useSelector} from "react-redux";
import CustomNavLink from "../../helpers/CustomNavLink";
import {selectUser} from "../../redux/auth/selectors";
import {logoutThunk} from "../../redux/auth/operations";

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <>
      <li className="navbar-center space-x-2 max-[767px]:hidden">
        <p>{user.email}</p>
      </li>

      <li className="navbar-end flex items-center gap-2 max-[767px]:hidden">
        <CustomNavLink to="/contacts">Contacts</CustomNavLink>
        <button className="btn btn-outline" type="submit" onClick={() => dispatch(logoutThunk())}>
          Log Out
        </button>
      </li>

      <li className="text-[18px] min-[768px]:hidden">
        <p>{user.email}</p>
      </li>

      <li className="navbar-end min-[768px]:hidden">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-28 p-2 shadow"
          >
            <li>
              <CustomNavLink to="/contacts">Contacts</CustomNavLink>
            </li>
            <li>
              <button
                className="btn btn-outline btn-sm"
                type="submit"
                onClick={() => dispatch(logoutThunk())}
              >
                Log Out
              </button>
            </li>
          </ul>
        </div>
      </li>
    </>
  );
};
export default UserMenu;
