import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

const SocialLogin = () => {
  return (
    <div className="flex gap-5 items-center justify-center">
      <p>Login with</p>
      <div className="flex gap-2 items-center justify-center">
        <button>
          <FcGoogle className="text-xl" />
        </button>
        <button>
          <BsGithub className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
