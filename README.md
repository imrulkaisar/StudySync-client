# StudySync

[Live Link](https://studysync.surge.sh)

# Assignment Management System

This project is an Assignment Management System built using React, Firebase, and React Router. It allows users to create, delete, and update assignments. Users can also view and submit assignments, and admins can mark and provide feedback on assignments.

## Features

### Authentication

- Users can register an account using Firebase Authentication by providing their name, photoURL, email, and password.
- Social login options such as Google Login and GitHub Sign Up are implemented for ease of access.

### Assignment Management

- Any logged-in user can create an assignment with a title, description, marks, thumbnail Image URL, assignment difficulty level, and due date (selected using the React Datepicker package).
- Users can delete only the assignments they have created. An error message is displayed if a user tries to delete an assignment created by another user.
- Users have the option to update any assignment, with the form pre-filled with the previous assignment data. A success message is shown upon a successful update.

### Taking Assignment as an Individual

- Users can filter assignments based on their difficulty level (easy, medium, hard).
- Each assignment card displays the thumbnail, title, marks, difficulty level, and buttons for viewing and updating the assignment details.
- Users can submit assignments through a modal, providing a PDF link and additional notes.

### Marking Assignments

- The submitted assignments page shows all pending assignments by default.
- Login users can see the completed assignments also.
- Login users can access each submitted assignment, view the PDF link and notes, and provide marks and feedback.
- After marking an assignment, its status changes to complete.
- User can't mark his/her own submitted assignments.

## Pages

1. **Home Page (public page):** Includes a navbar, footer, banner section, feature section, and FAQ section. The navbar contains links to assignments, login, register, create assignments, my assignments, submitted assignments, and logout.

2. **Create Assignment Page (private page):** Enables users to create assignments with the necessary details.

3. **All Assignments Page (public page):** Displays all assignments created by any user.

4. **My Assignment Page (private page):** Shows assignments submitted by the logged-in user, including details like assignment title, status, marks, and feedback.

5. **Submitted Assignment Page (private page):** Displays all pending assignments submitted by users, allowing admins to mark and provide feedback.

6. **Update Assignment Page (private page):** Allows users to update the details of an assignment.

7. **View Single Assignment Page (private page):** Shows the details of a single assignment.

8. **Login and Registration Pages (public pages):** Enable users to log in to or register for the platform.

## Installation

To run the application locally, follow these steps:

1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Configure your Firebase credentials in the application.
4. Run `npm run dev` to start the development server.
5. Open your browser and navigate to `http://localhost:5173/` to view the application.

Feel free to explore the features of this Assignment Management System and enhance its functionalities as per your requirements.
