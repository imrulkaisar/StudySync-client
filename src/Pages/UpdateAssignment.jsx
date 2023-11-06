/**
 *
 * Requirements:
 * ==============================
 * 1. Any user is able to update any assignment. [optional : it’s recommended to let the user update an assignment task who has created it. Follow hints of delete operation] 
 * 2. While a user will try to update an assignment the input fields of updated assignment form will be filled automatically with previous assignment data [automatically filled is optional . But you should try it ]. And users can change the input field data and can update with clicking on update assignment button.
 * 3. While the assignment is updated, show a success message and redirect the user to the all assignment page. [Redirecting is optional]
 * 
 * 


 */

import { useState } from "react";
import PageHeader from "../Layouts/PageHeader";
import useAuth from "../Hooks/useAuth";
import DatePicker from "react-datepicker";
import { AiOutlineCalendar } from "react-icons/ai";

import "react-datepicker/dist/react-datepicker.css";
import useToast from "../Hooks/useToast";

const UpdateAssignment = () => {
  const { user } = useAuth();
  const { showToast } = useToast();

  // form states
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [marks, setMarks] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [difficultyLabel, setDifficultyLabel] = useState("None");
  const [dueDate, setDueDate] = useState(new Date());

  const isUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleAddAssignment = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const assignmentData = {
      title,
      description,
      marks,
      thumbnail,
      difficultyLabel,
      dueDate,
      author: {
        name: user.displayName || "",
        email: user.email || "",
        image: user.photoURL || "",
      },
    };

    console.log(assignmentData);
  };

  const validateForm = () => {
    if (
      !title ||
      !description ||
      !marks ||
      !thumbnail ||
      difficultyLabel === "None" ||
      !dueDate
    ) {
      showToast("error", "Please fill out all the fields.");
      return false;
    }

    if (marks < 0 || isNaN(marks)) {
      showToast("error", "Marks must be a positive number");
      return false;
    }

    if (!isUrl(thumbnail)) {
      showToast("error", "Please enter a valid URL for the thumbnail");
      return false;
    }

    return true;
  };

  return (
    <>
      <PageHeader title="Update assignment" />
      <section>
        <div className="container-area max-w-4xl bg-gray-100 py-14 px-12 space-y-8">
          <p>
            Please do the necessary adjustments. All the fields are required.
          </p>
          <form
            className="flex flex-col md:grid md:grid-cols-3 gap-5"
            onSubmit={handleAddAssignment}
          >
            <div className="form-group col-span-3">
              <label className="" htmlFor="title">
                Assignment Title
              </label>
              <input
                className="form-input"
                type="text"
                name="title"
                id="title"
                placeholder="Assignment Title"
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="form-group col-span-3">
              <label className="" htmlFor="description">
                Description
              </label>
              <textarea
                className="form-input min-h-[150px]"
                name="description"
                id="description"
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="form-group col-span-2">
              <label className="" htmlFor="thumbnail">
                Thumbnail URL
              </label>
              <input
                className="form-input"
                type="text"
                name="thumbnail"
                id="thumbnail"
                placeholder="Thumbnail URL"
                onChange={(e) => setThumbnail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label className="" htmlFor="marks">
                Total Marks
              </label>
              <input
                className="form-input"
                type="text"
                name="marks"
                id="marks"
                placeholder="Total Marks"
                onChange={(e) => setMarks(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label className="" htmlFor="dueDate">
                Due Date
              </label>
              {/* <input
                className="form-input"
                type="date"
                name="dueDate"
                id="dueDate"
                placeholder="Due Date"
                onChange={(e) => setDueDate(e.target.value)}
                required
              /> */}
              <div className="form-input py-2 px-4">
                <DatePicker
                  showIcon
                  icon={<AiOutlineCalendar className="text-lg text-gray-400" />}
                  className="fom-input text-gray-600"
                  selected={dueDate}
                  onChange={(date) => setDueDate(date)}
                />
              </div>
            </div>
            <div className="form-group col-span-2 flex flex-col lg:flex-row gap-4 items-center justify-end">
              <div className="">Difficulty Level:</div>
              <div className="flex gap-1 rounded-lg overflow-hidden min-w-min">
                <label
                  className={`btn bg-white rounded-none ${
                    difficultyLabel === "easy" ? "bg-gray-600 text-white" : ""
                  }`}
                  onClick={() => setDifficultyLabel("easy")}
                >
                  Easy
                </label>
                <label
                  className={`btn bg-white rounded-none ${
                    difficultyLabel === "medium" ? "bg-gray-600 text-white" : ""
                  }`}
                  onClick={() => setDifficultyLabel("medium")}
                >
                  Medium
                </label>
                <label
                  className={`btn bg-white rounded-none ${
                    difficultyLabel === "hard" ? "bg-gray-600 text-white" : ""
                  }`}
                  onClick={() => setDifficultyLabel("hard")}
                >
                  Hard
                </label>
              </div>
            </div>
            <div className="col-span-3">
              <button
                type="submit"
                className="btn btn-primary w-full py-5 text-lg"
              >
                Update Assignment
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default UpdateAssignment;
