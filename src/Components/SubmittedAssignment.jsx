import { useState } from "react";
import Popup from "reactjs-popup";
import useAuth from "../Hooks/useAuth";
import useAxios from "../Hooks/useAxios";
import useToast from "../Hooks/useToast";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineWarning } from "react-icons/ai";

const SubmittedAssignment = ({ data, updateData }) => {
  const { user } = useAuth();
  const axios = useAxios();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const [givenMark, setGivenMark] = useState(null);
  const [feedback, setFeedback] = useState("");
  const { _id, assignment, pdfLink, note, examinee, status } = data || {};

  // console.log(Object.keys(data).join(", "));

  const handleMarking = (e) => {
    e.preventDefault();
    const assignmentData = {
      givenMark,
      feedback,
      examiner: {
        name: user.displayName,
        email: user.email,
      },
      status: "complete",
    };

    console.log(assignmentData);
    updateAssignment(assignmentData);
  };

  const updateAssignment = async (data) => {
    try {
      const response = await axios.patch(`submitted-assignments/${_id}`, data);

      if (response.data.modifiedCount > 0) {
        showToast("success", "Assignment evaluated successfully!");
        updateData();
        closePopup();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const closePopup = () => {
    const popup = document.getElementById("popup-root").firstElementChild;
    popup.style.display = "none";
  };

  return (
    <>
      <tr className="border-b">
        <th
          scope="row"
          className="px-6 py-7 font-medium text-gray-900 whitespace-nowrap"
        >
          {assignment && assignment.title}
        </th>
        <td className="px-6 py-7">
          {data?.givenMarks ? data?.givenMarks + "/" : ""}
          {assignment && assignment?.marks}
        </td>
        <td className="px-6 py-7 whitespace-nowrap">
          {examinee && examinee?.name}
        </td>
        <td className="px-6 py-7">
          <span className="border-2 border-secondaryShadow px-3 py-1 rounded-md capitalize">
            {status}
          </span>
        </td>
        <td className="px-6 py-7">
          {status === "pending" ? (
            <Popup
              trigger={(open) => (
                <button className="btn btn-primary text-sm px-4 whitespace-nowrap">
                  Give Mark
                </button>
              )}
              position="right center"
              closeOnDocumentClick
              modal
              contentStyle={{
                borderRadius: "10px",
              }}
            >
              <div className="p-8 min-h-[300px] rounded-lg space-y-8">
                {examinee?.email === user?.email ? (
                  <div className="text-center space-y-5">
                    <AiOutlineWarning className="inline text-6xl text-red-600" />
                    <h4 className="text-3xl font-semibold capitalize max-w-sm mx-auto">
                      You can't evaluated your submitted assignment.
                    </h4>
                    <p>Please wait for others' feedback.</p>
                    <Link
                      to="/assignments"
                      className="btn btn-primary inline-block"
                    >
                      All Assignments
                    </Link>
                  </div>
                ) : (
                  <div>
                    <h4 className="text-center text-3xl font-semibold capitalize">
                      Evaluate this assignment
                    </h4>
                    <div className="space-y-2">
                      <p>
                        <a
                          className="text-secondary"
                          href={pdfLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <b>PDF Link</b>
                        </a>
                      </p>
                      <p>
                        <b>Examinee Notes:</b> {note}
                      </p>
                      <p>
                        <b>Total Mark:</b> {assignment && assignment.marks}
                      </p>
                    </div>
                    <form className="space-y-5" onSubmit={handleMarking}>
                      <div className="form-group col-span-3 flex flex-row gap-5 items-center">
                        <label className="" htmlFor="mark">
                          Your Mark
                        </label>
                        <input
                          className="form-input bg-gray-100 w-52"
                          type="number"
                          name="mark"
                          id="mark"
                          placeholder="Mark"
                          onChange={(e) => setGivenMark(e.target.value)}
                          required
                          min="0"
                          max={assignment && assignment.marks}
                        />
                      </div>
                      <div className="form-group col-span-3">
                        <label className="sr-only" htmlFor="feedback">
                          Your Feedback
                        </label>
                        <textarea
                          className="form-input min-h-[150px] bg-gray-100"
                          name="feedback"
                          id="feedback"
                          placeholder="Your Feedback"
                          onChange={(e) => setFeedback(e.target.value)}
                          required
                        ></textarea>
                      </div>
                      <div className="text-center">
                        <button
                          type="submit"
                          className="btn btn-primary mx-auto"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </Popup>
          ) : (
            <span className="text-sm text-green-600 whitespace-nowrap">
              Completed by <br />
              {data?.examiner?.name}
            </span>
          )}
        </td>
      </tr>
      {data?.feedback ? (
        <tr>
          <td className="px-5 py-3 bg-gray-300" colSpan="5">
            <b>Feedback: </b>
            {data?.feedback}
          </td>
        </tr>
      ) : (
        ""
      )}
    </>
  );
};

export default SubmittedAssignment;
