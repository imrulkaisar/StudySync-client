/**
 *
 * Requirements:
 * ================================
 * 1. The submitted assignment page will contain all submitted assignments by the users.
 * 2. Only pending assignments will be shown on the submitted assignments page.
 * 3. Every submitted assignment will have the assignment title, assignment marks, examinee name, and a “give mark” button.
 * 4. By clicking on the give mark button it will open a modal or will navigate to a new page. And a user will be able to see the google drive link(pdf file) , note submitted by examinee. There will be a marks input field and a feedback input field and a submit button for giving marks.
 * 5. User is able to give a mark after clicking on the submit button.
 * 6. After marking an assignment the status of the assignment will be changed to completed.
 * 
 * 

 */

import { useState } from "react";
import SubmittedAssignment from "../Components/SubmittedAssignment";
import PageHeader from "../Layouts/PageHeader";

const SubmittedAssignments = () => {
  const [submittedStatus, setSubmittedStatus] = useState("pending");

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
                submittedStatus === "completed" ? "bg-gray-800 text-white" : ""
              }`}
              onClick={() => setSubmittedStatus("completed")}
            >
              Completed
            </label>
          </div>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-600">
              <thead className="text-sm text-white uppercase bg-gray-800 border-gray-700">
                <tr>
                  <th scope="col" className="px-6 py-7">
                    Assignment Title
                  </th>
                  <th scope="col" className="px-6 py-7">
                    Mark
                  </th>
                  <th scope="col" className="px-6 py-7">
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
                <SubmittedAssignment />
                <SubmittedAssignment />
                <SubmittedAssignment />
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default SubmittedAssignments;
