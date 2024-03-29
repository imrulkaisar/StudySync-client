import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxios from "../Hooks/useAxios";

const SocialLogin = () => {
  const { googleLogin, githubLogin } = useAuth();
  const axios = useAxios();
  const navigate = useNavigate();

  const location = useLocation();
  const state = location.state || {};
  const { pathname = "/", search = "" } = state;

  const socialLogin = (media) => {
    media()
      .then((res) => {
        if (res.user) {
          (async () => {
            const userEmail = { email: res.user.email };

            const tokenRes = await axios.post("/jwt", userEmail);

            if (tokenRes.data) {
              Swal.fire({
                icon: "success",
                title: "You are logged in!",
                showConfirmButton: false,
                showCloseButton: true,
              });
              navigate(pathname + search);
            }
          })();
        }
      })
      .catch((error) => {
        console.error(error);

        Swal.fire({
          icon: "error",
          title: "Something wrong!",
          text: error.message,
          showConfirmButton: false,
          showCloseButton: true,
        });
      });
  };

  return (
    <div className="flex gap-5 items-center justify-center">
      <p>Login with</p>
      <div className="flex gap-4 items-center justify-center">
        <button onClick={() => socialLogin(googleLogin)}>
          <FcGoogle className="text-xl" />
        </button>
        <button onClick={() => socialLogin(githubLogin)}>
          <BsGithub className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
