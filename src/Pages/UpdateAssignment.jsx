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

import { useEffect, useState } from "react";
import PageHeader from "../Layouts/PageHeader";
import useAuth from "../Hooks/useAuth";
import DatePicker from "react-datepicker";
import { AiOutlineCalendar } from "react-icons/ai";

import "react-datepicker/dist/react-datepicker.css";
import useToast from "../Hooks/useToast";
import { useNavigate, useParams } from "react-router-dom";
import useAxios from "../Hooks/useAxios";

const UpdateAssignment = () => {
  const { id } = useParams();
  const axios = useAxios();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const [assignment, setAssignment] = useState({});
  const {
    _id,
    title,
    description,
    marks,
    thumbnail,
    difficultyLabel,
    dueDate,
    author,
  } = assignment || {};

  // form states
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newMarks, setNewMarks] = useState("");
  const [newThumbnail, setThumbnail] = useState("");
  const [newDifficultyLabel, setNewDifficultyLabel] = useState("");
  const [newDueDate, setNewDueDate] = useState(new Date());

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
      newTitle,
      newDescription,
      newMarks,
      newThumbnail,
      newDifficultyLabel,
      newDueDate,
    };
    updateAssignmentData(assignmentData);
  };

  const updateAssignmentData = async (data) => {
    try {
      const response = await axios.patch(`/update-assignment/${_id}`, data);

      if (response.data.modifiedCount > 0) {
        showToast("success", "Assignment updated successfully!");

        navigate("/assignments");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const validateForm = () => {
    if (
      !newTitle ||
      !newDescription ||
      !newMarks ||
      !newThumbnail ||
      newDifficultyLabel === "None" ||
      !newDueDate
    ) {
      showToast("error", "Please fill out all the fields.");
      return false;
    }

    if (newMarks < 0 || isNaN(newMarks)) {
      showToast("error", "Marks must be a positive number");
      return false;
    }

    if (!isUrl(newThumbnail)) {
      showToast("error", "Please enter a valid URL for the thumbnail");
      return false;
    }

    return true;
  };

  useEffect(() => {
    const loadAssignment = async () => {
      try {
        const response = await axios.get(`/assignments/${id}`);

        const assignmentData = response.data[0];
        setAssignment(assignmentData);

        setNewTitle(assignmentData.title);
        setNewDescription(assignmentData.description);
        setNewMarks(assignmentData.marks);
        setThumbnail(assignmentData.thumbnail);
        setNewDifficultyLabel(assignmentData.difficultyLabel);
        setNewDueDate(new Date(assignmentData.dueDate));
      } catch (error) {
        console.error(error);
      }
    };

    loadAssignment();
  }, [id, axios]);

  // console.log(assignment);

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
                name="newTitle"
                id="title"
                placeholder="Assignment Title"
                onChange={(e) => setNewTitle(e.target.value)}
                required
                defaultValue={title}
              />
            </div>
            <div className="form-group col-span-3">
              <label className="" htmlFor="newDescription">
                Description
              </label>
              <textarea
                className="form-input min-h-[150px]"
                name="newDescription"
                id="newDescription"
                placeholder="Description"
                onChange={(e) => setNewDescription(e.target.value)}
                required
                defaultValue={description}
              ></textarea>
            </div>
            <div className="form-group col-span-2">
              <label className="" htmlFor="newThumbnail">
                Thumbnail URL
              </label>
              <input
                className="form-input"
                type="text"
                name="newThumbnail"
                id="newThumbnail"
                placeholder="Thumbnail URL"
                onChange={(e) => setThumbnail(e.target.value)}
                required
                defaultValue={thumbnail}
              />
            </div>
            <div className="form-group">
              <label className="" htmlFor="newMarks">
                Total Marks
              </label>
              <input
                className="form-input"
                type="text"
                name="newMarks"
                id="newMarks"
                placeholder="Total Marks"
                onChange={(e) => setNewMarks(e.target.value)}
                required
                defaultValue={marks}
              />
            </div>
            <div className="form-group">
              <label className="" htmlFor="newDueDate">
                Due Date
              </label>
              {/* <input
                className="form-input"
                type="date"
                name="newDueDate"
                id="newDueDate"
                placeholder="Due Date"
                onChange={(e) => setNewDueDate(e.target.value)}
                required
              /> */}
              <div className="form-input py-2 px-4">
                <DatePicker
                  showIcon
                  icon={<AiOutlineCalendar className="text-lg text-gray-400" />}
                  className="fom-input text-gray-600"
                  selected={newDueDate}
                  onChange={(date) => setNewDueDate(date)}
                />
              </div>
            </div>
            <div className="form-group col-span-2 flex flex-col lg:flex-row gap-4 items-center justify-end">
              <div className="">Difficulty Level:</div>
              <div className="flex gap-1 rounded-lg overflow-hidden min-w-min">
                <label
                  className={`btn rounded-none ${
                    difficultyLabel === "easy" ? "bg-gray-800 text-white" : ""
                  }`}
                  onClick={() => setNewDifficultyLabel("easy")}
                >
                  Easy
                </label>
                <label
                  className={`btn rounded-none ${
                    difficultyLabel === "medium" ? "bg-gray-800 text-white" : ""
                  }`}
                  onClick={() => setNewDifficultyLabel("medium")}
                >
                  Medium
                </label>
                <label
                  className={`btn rounded-none ${
                    difficultyLabel === "hard" ? "bg-gray-800 text-white" : ""
                  }`}
                  onClick={() => setNewDifficultyLabel("hard")}
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
