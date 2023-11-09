/**
 * 
 * Requirements:
 * =========================
 * [Done] 1. My assignment page(private page) - will have all assignments which are submitted by the specific user. For example, if you logged in you will only see your submitted assignment on the my assignment page
 * [Done] 2. You can see assignment title, assignment status, assignment marks, your obtain marks, feedback(if you got the marks)
 * 


 */

import { useEffect, useState } from "react";
import SubmittedAssignment from "../Components/SubmittedAssignment";
import PageHeader from "../Layouts/PageHeader";
import useAxios from "../Hooks/useAxios";
import useAuth from "../Hooks/useAuth";
import TableSkeleton from "../Components/skeletons/TableSkeleton";

const MySubmittedAssignments = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const [submittedStatus, setSubmittedStatus] = useState(null);
  const [submittedAssignments, setSubmittedAssignments] = useState([]);

  const loadSubmittedAssignment = async () => {
    try {
      const response = await axios.get(
        `/submitted-assignments/?status=${submittedStatus}&email=${user?.email}`
      );

      setSubmittedAssignments([]);

      setTimeout(() => {
        setSubmittedAssignments(response.data);
      }, 1000);

      // console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadSubmittedAssignment();
  }, [submittedStatus, user]);

  //
  const updateData = () => {
    loadSubmittedAssignment();
  };

  // console.log(submittedAssignments);

  return (
    <>
      <PageHeader
        title="My Submitted Assignments"
        description="All the assignments submitted by the user"
      />

      <section>
        <div className="container-area space-y-12">
          <div className="flex gap-[1px] justify-center max-w-min mx-auto rounded-lg overflow-hidden min-w-min border bg-white border-gray-300">
            <label
              className={`btn rounded-none cursor-pointer ${
                submittedStatus === null ? "bg-gray-800 text-white" : ""
              }`}
              onClick={() => setSubmittedStatus(null)}
            >
              All
            </label>
            <label
              className={`btn rounded-none cursor-pointer ${
                submittedStatus === "pending" ? "bg-gray-800 text-white" : ""
              }`}
              onClick={() => setSubmittedStatus("pending")}
            >
              Pending
            </label>
            <label
              className={`btn rounded-none cursor-pointer ${
                submittedStatus === "complete" ? "bg-gray-800 text-white" : ""
              }`}
              onClick={() => setSubmittedStatus("complete")}
            >
              Completed
            </label>
          </div>

          {submittedAssignments.length > 0 ? (
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-600">
                <thead className="text-sm text-white uppercase bg-gray-800 border-gray-700">
                  <tr>
                    <th scope="col" className="px-6 py-7 whitespace-nowrap">
                      Assignment Title
                    </th>
                    <th scope="col" className="px-6 py-7">
                      Mark
                    </th>
                    <th scope="col" className="px-6 py-7 whitespace-nowrap">
                      Examinee name
                    </th>
                    <th scope="col" className="px-6 py-7">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-7">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="text-base odd:bg-gray-300 even:bg-white">
                  {submittedAssignments.map((assignment) => (
                    <SubmittedAssignment
                      key={assignment._id}
                      data={assignment}
                      updateData={updateData}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <TableSkeleton />
          )}
        </div>
      </section>
    </>
  );
};

export default MySubmittedAssignments;
