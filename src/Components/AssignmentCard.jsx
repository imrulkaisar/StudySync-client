/**
 *
 * Requirements:
 * ======================
 * [Done] Users will see a thumbnail, title, marks, assignment difficulty level and “View Assignment”and “Update Assignment” buttons for every assignment. It's up to you how you will display the cards of assignment.

 */
import { BsEye } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useToast from "../Hooks/useToast";
import Swal from "sweetalert2";

const AssignmentCard = ({ data }) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { showToast } = useToast();

  const {
    _id,
    title,
    description,
    marks,
    thumbnail,
    difficultyLabel,
    dueDate,
    author,
  } = data || {};

  const detailsLink = `/assignment/${_id}`;

  const handleEditAssignment = () => {
    if (user?.email === author?.email) {
      navigate(`/update-assignment/${_id}`);
    } else {
      // showToast("error", "You can only edit your won assignments.");
      Swal.fire({
        icon: "error",
        title: "Forbidden!",
        text: "You can only edit your won assignments.",
        showConfirmButton: false,
        showCloseButton: true,
      });
    }
  };
  return (
    <article className="md:flex rounded-lg overflow-hidden w-full relative bg-gray-50 items-stretch">
      <Link to={detailsLink} className="md:h-full w-full md:w-56">
        <img
          className="w-full md:w-56 md:h-full aspect-video object-cover"
          src={thumbnail}
          alt=""
        />
      </Link>
      <span className="absolute gradient-bg py-1 px-5 rounded-br-lg text-white top-0 left-0 text-sm uppercase">
        {difficultyLabel}
      </span>
      <div className="p-5 border flex-grow rounded-tr-lg rounded-br-lg">
        <Link to={detailsLink}>
          <h4 className="font-medium text-lg">{title}</h4>
        </Link>
        <p>
          Total marks:{" "}
          <span className="text-secondaryShadow font-bold text-xl">
            {marks}
          </span>
        </p>
        <div className="mt-5 flex gap-5 justify-between">
          <Link
            to={detailsLink}
            className="flex gap-2 items-center uppercase text-xs tracking-wider border-b border-t py-1 border-gray-400 border-dotted hover:text-secondaryShadow"
          >
            <BsEye /> <span>view details</span>
          </Link>
          <button
            onClick={handleEditAssignment}
            className="flex gap-2 items-center uppercase text-xs tracking-wider border-b border-t py-1 border-gray-400 border-dotted hover:text-secondaryShadow"
          >
            <AiOutlineEdit /> <span>Edit</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default AssignmentCard;
