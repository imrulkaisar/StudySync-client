import { useState } from "react";
import Popup from "reactjs-popup";
import useAuth from "../Hooks/useAuth";

const SubmittedAssignment = () => {
  const { user } = useAuth();
  const [mark, setMark] = useState(null);
  const [feedback, setFeedback] = useState("");

  const handleMarking = (e) => {
    e.preventDefault();
    const assignmentData = {
      mark,
      feedback,
      examiner: {
        name: user.displayName,
        email: user.email,
      },
      status: "complete",
    };

    console.log(assignmentData);
  };

  return (
    <>
      <tr className="border-b">
        <th
          scope="row"
          className="px-6 py-7 font-medium text-gray-900 whitespace-nowrap"
        >
          Basic HTML Page
        </th>
        <td className="px-6 py-7">60</td>
        <td className="px-6 py-7">Imrul Kaisar</td>
        <td className="px-6 py-7">Pending</td>
        <td className="px-6 py-7">
          <Popup
            trigger={(open) => (
              <button className="btn btn-primary text-sm px-4">
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
              <h4 className="text-center text-3xl font-semibold capitalize">
                Evaluate this assignment
              </h4>
              <div className="space-y-2">
                <p>
                  <b>PDF Link: </b>
                  <a className="text-secondary" href="#">
                    Google Drive Link
                  </a>
                </p>
                <p>
                  <b>Examinee Notes:</b> Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Quae ducimus totam beatae odit quisquam?
                  Odit.
                </p>
                <p>
                  <b>Total Mark:</b> 60
                </p>
              </div>
              <form className="space-y-5" onSubmit={handleMarking}>
                <div className="form-group col-span-3 flex flex-row gap-5 items-center">
                  <label className="" htmlFor="mark">
                    Your Mark
                  </label>
                  <input
                    className="form-input bg-gray-100 w-24"
                    type="text"
                    name="mark"
                    id="mark"
                    placeholder="Mark"
                    onChange={(e) => setMark(e.target.value)}
                    required
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
                  <button type="submit" className="btn btn-primary mx-auto">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </Popup>
        </td>
      </tr>
    </>
  );
};

export default SubmittedAssignment;
