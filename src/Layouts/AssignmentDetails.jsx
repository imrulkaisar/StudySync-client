/**
 *
 * Requirements:
 * ============================
 * 1. By clicking on the view assignment button the user will be navigated to the assignment details page (this page will be private) where the user will see the assignment details which are provided while the assignment was created. And the “Take assignment” button will be shown.
 * 2. Users are able to submit an assignment by clicking on the “Take assignment” button and it will open a modal [Or you may open a new page,it's up to you] with the assignment submission form.
 * 3. The assignment submission form will have input fields for PDF link submission and another text area for giving a quick note text.
 * 4. By default every submitted assignment will be in pending status . And save the user email with the submitted assignment so that it can be determined who has submitted it.
 * 

 */

import Popup from "reactjs-popup";
import PageHeader from "./PageHeader";

import "reactjs-popup/dist/index.css";
import { useState } from "react";
import useAuth from "../Hooks/useAuth";

const AssignmentDetails = () => {
  const { user } = useAuth();
  const [pdfLink, setPdfLink] = useState("");
  const [note, setNote] = useState("");

  const handleAssignmentSubmit = (e) => {
    e.preventDefault();

    const assignmentData = {
      pdfLink,
      note,
      examinee: {
        name: user.displayName,
        email: user.email,
      },
      status: "pending",
    };

    console.log(assignmentData);
  };

  return (
    <>
      <PageHeader
        title={`Assignment Details`}
        steps={[{ link: "/assignments", title: "All assignments" }]}
      />
      <section>
        <div className="container-area flex flex-col lg:flex-row items-center lg:items-start gap-10">
          <div className="flex-grow space-y-8">
            <img
              className="w-full aspect-video object-cover rounded-lg"
              src="https://th.bing.com/th/id/OIP.C3YgRLy7VOqgL3tAbyWEQQAAAA?pid=ImgDet&rs=1"
              alt=""
            />
            <h2 className="section-title">Basic HTML Page</h2>
            <div className="description text-gray-600">
              {`
              Create a basic HTML page with necessary tags such as <html>, <head>, and <body>. Add relevant content including headings, paragraphs, and lists. Insert an image using the <img> tag and create a simple form with input fields and a submit button. Add appropriate attributes to each element for better accessibility and user interaction.
              `}
            </div>
          </div>

          <div className="max-w-xs w-full space-y-8">
            <div className="w-full p-5 text-center bg-secondaryShadow text-white text-xl rounded-lg">
              Difficulty Level Medium
            </div>
            <div className="border px-5 py-8 text-center space-y-4 bg-gray-100">
              <h4 className="font-semibold text-lg">Created by</h4>
              <div>
                <img
                  src="https://avatars.githubusercontent.com/u/14228591?v=4"
                  alt=""
                  className="inline w-16 aspect-square rounded-full p-1 border border-gray-300"
                />
                <h5 className="font-semibold">Imrul Kaisar</h5>
                <p className="text-xs">imrulkaisar3@gmail.com</p>
              </div>
            </div>
            <div className="text-3xl text-center">Total Marks: 60</div>
            <Popup
              trigger={(open) => (
                <button className="btn btn-primary w-full py-5">
                  Take Assignment
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
                  Submit your assignment
                </h4>
                <form className="space-y-5" onSubmit={handleAssignmentSubmit}>
                  <div className="form-group col-span-3">
                    <label className="sr-only" htmlFor="title">
                      PDF link of your assignment
                    </label>
                    <input
                      className="form-input bg-gray-100"
                      type="text"
                      name="title"
                      id="title"
                      placeholder="PDF link of your assignment"
                      onChange={(e) => setPdfLink(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group col-span-3">
                    <label className="sr-only" htmlFor="description">
                      Your Note
                    </label>
                    <textarea
                      className="form-input min-h-[150px] bg-gray-100"
                      name="description"
                      id="description"
                      placeholder="Your Note"
                      onChange={(e) => setNote(e.target.value)}
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
          </div>
        </div>
      </section>
    </>
  );
};

export default AssignmentDetails;
