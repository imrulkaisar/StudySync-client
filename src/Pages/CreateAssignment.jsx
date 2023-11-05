/**
 *
 * Requirements:
 * ====================
 * 1. Any logged in user is able to create an assignment for all users.
 * 2. An assignment will have a title, description, marks, thumbnail Image URL, assignment difficulty level(easy, medium, hard) [YOU MAY USE DROPDOWN SELECT INPUT FIELD], and due date [use this package for selecting date “https://www.npmjs.com/package/react-datepicker”]
 * 3. A success message will be shown when the assignment will be created successfully. [YOU MAY USE TOAST OF MODAL]
 * 4. While a user will create an assignment you have to store the user email with the assignment data [followed by Assignment creation requirement] . And then while a user will be trying to delete an assignment you will compare the current user email with the assignment creator email. And if it matches then the assignment will be deleted.
 * 5. [Bonus] Add validation in the create assignment form.

 */

const CreateAssignment = () => {
  return (
    <div>
      <h2>Create Assignment</h2>
    </div>
  );
};

export default CreateAssignment;
