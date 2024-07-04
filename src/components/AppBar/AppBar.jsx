import {useSelector} from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import {selectIsLoggedIn, selectUser} from "../../redux/auth/selectors";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header>
      <nav>
        <ul className="navbar bg-base-100 max-w-[1024px] mx-auto">
          <Navigation />
          {!isLoggedIn ? <AuthNav /> : <UserMenu />}
        </ul>
      </nav>
    </header>
  );
};
export default AppBar;
