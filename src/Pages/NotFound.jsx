import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div className="min-h-screen px-16 pt-10 pb-20 max-w-4xl mx-auto flex flex-col gap-5 justify-center items-center">
        <img
          src="https://storeus.com/static/media/NotFound.6c7f78748c3f14f692f6.jpeg"
          alt=""
        />
        <h2 className="text-gray-300 text-5xl">404 Page Not Found!</h2>
        <Link to="/" className="btn btn-primary mt-5">
          Go to homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
