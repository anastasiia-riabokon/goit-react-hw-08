import {useSelector} from "react-redux";
import {selectUser} from "../../redux/auth/selectors";
import {Link} from "react-router-dom";

const HomePage = () => {
  const user = useSelector(selectUser);
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(/bg.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello {user.name}</h1>
          <p className="mb-5">Keep all your important contacts organized and easily accessible.</p>
          <Link to="/login" className="btn btn-outline">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
