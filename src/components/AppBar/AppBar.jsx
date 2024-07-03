import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";

const AppBar = () => {
  return (
    <header>
      <nav>
        <ul className="navbar bg-base-100">
          <Navigation />
          <AuthNav />
          <UserMenu />
        </ul>
      </nav>
    </header>
  );
};
export default AppBar;
