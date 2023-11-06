/**
 *
 * Requirements:
 * ======================
 * Users will see a thumbnail, title, marks, assignment difficulty level and “View Assignment”and “Update Assignment” buttons for every assignment. It's up to you how you will display the cards of assignment.

 */
import { BsEye } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

const AssignmentCard = () => {
  const detailsLink = "/assignment/id";
  return (
    <article className="md:flex rounded-lg overflow-hidden w-full relative bg-gray-50">
      <Link to={detailsLink}>
        <img
          className="w-full md:w-56 aspect-video object-cover"
          src="https://th.bing.com/th/id/OIP.C3YgRLy7VOqgL3tAbyWEQQAAAA?pid=ImgDet&rs=1"
          alt=""
        />
      </Link>
      <span className="absolute gradient-bg py-1 px-5 rounded-br-lg text-white top-0 left-0">
        Easy
      </span>
      <div className="p-5 border flex-grow rounded-tr-lg rounded-br-lg">
        <Link to={detailsLink}>
          <h4 className="font-medium text-lg">Basic HTML Page</h4>
        </Link>
        <p>
          Total mark:{" "}
          <span className="text-secondaryShadow font-bold text-xl">90</span>
        </p>
        <div className="mt-5 flex gap-5 justify-between">
          <Link
            to={detailsLink}
            className="flex gap-2 items-center uppercase text-xs tracking-wider border-b border-t py-1 border-gray-400 border-dotted hover:text-secondaryShadow"
          >
            <BsEye /> <span>view details</span>
          </Link>
          <Link
            to={`/update-assignment/id`}
            className="flex gap-2 items-center uppercase text-xs tracking-wider border-b border-t py-1 border-gray-400 border-dotted hover:text-secondaryShadow"
          >
            <AiOutlineEdit /> <span>Edit</span>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default AssignmentCard;
