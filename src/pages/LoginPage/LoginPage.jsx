import {Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {loginThunk} from "../../redux/auth/operations";

const LoginPage = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values) => {
    dispatch(loginThunk(values));
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">Ready to come back? Enter your credentials.</p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <Field
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <Field
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="flex justify-between items-center mt-1">
                  <p className="label-text-alt">Do you have account?</p>
                  <Link to="/register" className="label-text-alt btn btn-outline btn-xs btn-accent">
                    Register
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-outline" type="submit">
                  Login
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
