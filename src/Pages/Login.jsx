/**
 *
 * Requirements:
 * ==================
 * [Done] 1: Users are able to login using social login. Implement at least one social login(like google login, github sign up) .
 * 2. [Bonus] Upon login, you will create a jwt token and store it on the client-side and you will send the token with the call and verify the user. Implementing 401 and 403 is optional. Ensure you have implemented jwt token and create a token and store it on the client-side for both email/password-based authentication and social login. You must implement JWT on your private routes.
 * 

 */

import { Link, useLocation, useNavigate } from "react-router-dom";
import PageHeader from "../Layouts/PageHeader";
import SocialLogin from "../Components/SocialLogin";
import { useState } from "react";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const location = useLocation();
  const state = location.state || {};
  const { pathname = "/", search = "" } = state;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await login(email, password);

      if (res.user) {
        Swal.fire({
          icon: "success",
          title: "Welcome back!",
          showConfirmButton: false,
          showCloseButton: true,
        });
      }

      navigate(pathname + search);
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Something wrong!",
        text: error.message,
        showConfirmButton: false,
        showCloseButton: true,
      });
    }
  };
  return (
    <div>
      <PageHeader title="Login" />
      <section className="py-10">
        <div className="container-area max-w-5xl flex flex-col-reverse lg:flex-row gap-10">
          <div className="flex-1 ">
            <img
              className="max-w-[500px] w-full mx-auto"
              src="https://tinyurl.com/p3m7kzsf"
              alt=""
            />
          </div>
          <div className="flex-1 text-center px-12 py-16 bg-gray-100 rounded-lg">
            <div className="space-y-8 max-w-sm mx-auto">
              <h3 className="text-2xl font-semibold capitalize">
                Login your account
              </h3>
              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="sr-only" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    className="form-input"
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="sr-only" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="form-input"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="text-center">
                  <button className="btn btn-primary" type="submit">
                    Login
                  </button>
                </div>
              </form>
              <footer className="space-y-3">
                <p>- OR -</p>
                <SocialLogin />
                <p>
                  Don't have any account?{" "}
                  <Link to="/register" className="text-secondary font-semibold">
                    Register
                  </Link>
                </p>
              </footer>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
