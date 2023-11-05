/**
 *
 * Requirements:
 * ==============================
 * [Done] 1. Users are able to register an account by providing name, photoURL, email, and password using firebase.
 * [Done] 2. [Bonus] Add validation in the registration form.
 * 3. [Bonus] Upon login, you will create a jwt token and store it on the client-side and you will send the token with the call and verify the user. Implementing 401 and 403 is optional. Ensure you have implemented jwt token and create a token and store it on the client-side for both email/password-based authentication and social login. You must implement JWT on your private routes.
 */

import { Link, useNavigate } from "react-router-dom";
import PageHeader from "../Layouts/PageHeader";
import SocialLogin from "../Components/SocialLogin";
import { useState } from "react";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, updateUser } = useAuth();
  const navigate = useNavigate();

  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Weak Password!",
        text: "Password length should be at least 6 characters.",
        showConfirmButton: false,
        showCloseButton: true,
      });
    } else if (!/[A-Z]/.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Weak Password!",
        text: "Password must have one capital letter.",
        showConfirmButton: false,
        showCloseButton: true,
      });
    } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Weak Password!",
        text: "Password must have one special character.",
        showConfirmButton: false,
        showCloseButton: true,
      });
    } else {
      try {
        const res = await createUser(email, password);
        console.log(res.user);

        await updateUser({
          displayName,
          photoURL,
        });

        // const userInfo = await {
        //   displayName,
        //   email,
        //   photoURL,
        // };

        // await fetch(`${apiURL}/users`, {
        //   method: "POST",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify(userInfo),
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     if (data.insertedId) {
        //       console.log("User add to the database!");
        //     }
        //   })
        //   .catch((error) => console.error(error));

        Swal.fire({
          icon: "success",
          title: "User created successfully!",
          showConfirmButton: false,
          showCloseButton: true,
        });

        navigate("/");
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <div>
      <PageHeader title="Register" />
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
              <h3 className="text-2xl font-semibold">Create an account</h3>
              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="sr-only" htmlFor="displayName">
                    Your Name
                  </label>
                  <input
                    className="form-input"
                    type="text"
                    name="displayName"
                    placeholder="Your Name"
                    onChange={(e) => setDisplayName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="sr-only" htmlFor="photoURL">
                    Photo URL
                  </label>
                  <input
                    className="form-input"
                    type="text"
                    name="photoURL"
                    placeholder="Photo URL"
                    onChange={(e) => setPhotoURL(e.target.value)}
                  />
                </div>
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
                    Register
                  </button>
                </div>
              </form>
              <footer className="space-y-3">
                <p>- OR -</p>
                <SocialLogin />
                <p>
                  Already have an account?{" "}
                  <Link to="/login" className="text-secondary font-semibold">
                    Login here
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

export default Register;
