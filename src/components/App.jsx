import {Route, Routes} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {lazy, useEffect} from "react";

import {refreshThunk} from "../redux/auth/operations";
import {selectIsRefreshing} from "../redux/auth/selectors";

import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import PrivateRoute from "../routes/PrivateRoute";
import RestrictedRoute from "../routes/RestrictedRoute";
import Loader from "./Loader/Loader";

const Layout = lazy(() => import("./Layout/Layout"));
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));

function App() {
  const dispatch = useDispatch();
  const isRefresh = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  return isRefresh ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute>
                <LoginPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute>
                <RegistrationPage />
              </RestrictedRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
