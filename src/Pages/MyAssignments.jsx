/**
 * 
 * Requirements:
 * =========================
 * 1. My assignment page(private page) - will have all assignments which are submitted by the specific user. For example, if you logged in you will only see your submitted assignment on the my assignment page
 * 2. You can see assignment title, assignment status, assignment marks, your obtain marks, feedback(if you got the marks)
 * 


 */

import { useEffect, useState } from "react";
import AssignmentCard from "../Components/AssignmentCard";
import PageHeader from "../Layouts/PageHeader";
import useAxios from "../Hooks/useAxios";
import useAuth from "../Hooks/useAuth";

const MyAssignments = () => {
  const axios = useAxios();
  const { user } = useAuth();
  const [assignments, setAssignments] = useState([]);

  const [difficultyLabel, setDifficultyLabel] = useState(null);
  const [totalAssignments, setTotalAssignments] = useState(48);
  const [itemPerPage, setItemPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(0);
  const pageNumber = Math.ceil(totalAssignments / itemPerPage);

  const pages = [...Array(pageNumber)];

  const handleItemPerPage = (value) => {
    setItemPerPage(value);
    setCurrentPage(0);
  };

  const loadAssignment = async () => {
    try {
      const response = await axios.get(
        `/assignments/?email=${user.email}&difficultyLabel=${difficultyLabel}`
      );

      setAssignments(response.data);

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadAssignment();
  }, [user, difficultyLabel]);

  return (
    <>
      <PageHeader
        title="All Assignments"
        description="All assignments created by you."
      />

      <section>
        <div className="container-area max-w-5xl py-8 space-y-12">
          <h2 className="section-title capitalize text-center">
            Your assignments
          </h2>
          <div className="flex flex-col lg:flex-row gap-5 justify-between items-center">
            <p>
              Showing {itemPerPage} assignments of total {totalAssignments}
            </p>
            <div className="flex gap-[1px] rounded-lg overflow-hidden min-w-min border bg-gray-300 border-gray-300 scale-75 lg:scale-100">
              <label
                className={`btn rounded-none cursor-pointer ${
                  difficultyLabel === null
                    ? "bg-gray-800 text-white"
                    : "bg-gray-100"
                }`}
                onClick={() => setDifficultyLabel(null)}
              >
                All
              </label>
              <label
                className={`btn rounded-none cursor-pointer ${
                  difficultyLabel === "easy"
                    ? "bg-gray-800 text-white"
                    : "bg-gray-100"
                }`}
                onClick={() => setDifficultyLabel("easy")}
              >
                Easy
              </label>
              <label
                className={`btn rounded-none cursor-pointer ${
                  difficultyLabel === "medium"
                    ? "bg-gray-800 text-white"
                    : "bg-gray-100"
                }`}
                onClick={() => setDifficultyLabel("medium")}
              >
                Medium
              </label>
              <label
                className={`btn rounded-none cursor-pointer ${
                  difficultyLabel === "hard"
                    ? "bg-gray-800 text-white"
                    : "bg-gray-100"
                }`}
                onClick={() => setDifficultyLabel("hard")}
              >
                Hard
              </label>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-10">
            {user && assignments.length > 0 ? (
              assignments.map((assignment) => (
                <AssignmentCard key={assignment._id} data={assignment} />
              ))
            ) : (
              <p className="text-center text-5xl col-span-2 py-16 text-gray-400">
                No data found...
              </p>
            )}
          </div>

          {/* Pagination */}
          <div className="flex flex-col lg:flex-row gap-5 justify-between items-center">
            <div className="flex gap-3 justify-center lg:order-2 flex-wrap max-w-md">
              {pages.map((page, index) => (
                <button
                  className={`px-5 py-2 border text-lg bg-gray-50 rounded-md ${
                    currentPage === index ? "bg-gray-800 text-white" : ""
                  }`}
                  key={index}
                  onClick={() => setCurrentPage(index)}
                >
                  {index}
                </button>
              ))}
            </div>
            <p className="lg:order-1">
              Showing {itemPerPage} assignments of total {totalAssignments}
            </p>

            <div className="flex gap-3 items-center lg:order-3">
              <p>Show per page: </p>
              <select
                name="itemPerPage"
                onChange={(e) => handleItemPerPage(e.target.value)}
                id="itemPerPage"
                className="border border-gray-300"
                defaultValue={itemPerPage}
              >
                <option value="4">4</option>
                <option value="8">8</option>
                <option value="12">12</option>
                <option value="24">24</option>
              </select>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyAssignments;
