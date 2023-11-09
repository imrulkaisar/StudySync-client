/**
 *
 * Requirements:
 * ================================
 * [Done] 1. The submitted assignment page will contain all submitted assignments by the users.
 * [Done] 2. Only pending assignments will be shown on the submitted assignments page.
 * [Done] 3. Every submitted assignment will have the assignment title, assignment marks, examinee name, and a “give mark” button.
 * [Done] 4. By clicking on the give mark button it will open a modal or will navigate to a new page. And a user will be able to see the google drive link(pdf file) , note submitted by examinee. There will be a marks input field and a feedback input field and a submit button for giving marks.
 * [Done] 5. User is able to give a mark after clicking on the submit button.
 * [Done] 6. After marking an assignment the status of the assignment will be changed to completed.
 * 
 * 

 */

import { useEffect, useState } from "react";
import SubmittedAssignment from "../Components/SubmittedAssignment";
import PageHeader from "../Layouts/PageHeader";
import useAxios from "../Hooks/useAxios";
import TableSkeleton from "../Components/skeletons/TableSkeleton";

const SubmittedAssignments = () => {
  const axios = useAxios();
  const [submittedStatus, setSubmittedStatus] = useState("pending");
  const [submittedAssignments, setSubmittedAssignments] = useState([]);

  const loadSubmittedAssignment = async () => {
    try {
      const response = await axios.get(
        `/submitted-assignments/?status=${submittedStatus}`
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
  }, [submittedStatus]);

  //
  const updateData = () => {
    // const filter = submittedAssignments.filter(assignment => assignment._id === newData._id);
    // const filteredAssignment = filter[0];
    // const updateAssignment = {...filteredAssignment, ...newData}
    // setSubmittedAssignments([...submittedAssignments])
    loadSubmittedAssignment();
  };

  return (
    <>
      <PageHeader
        title="Submitted Assignments"
        description="All the assignments submitted by the user"
      />

      <section>
        <div className="container-area space-y-12">
          <div className="flex gap-[1px] justify-center max-w-min mx-auto rounded-lg overflow-hidden min-w-min border bg-white border-gray-300">
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

export default SubmittedAssignments;
