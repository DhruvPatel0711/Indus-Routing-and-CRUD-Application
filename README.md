Express CRUD Application with MongoDB  

This project is a basic CRUD (Create, Read, Update, Delete) web application built using Express.js, MongoDB, and EJS templates.  

Features:  
1. Create: Add new user records with fields for name, mobile, email, and password.  
2. Read: View all user records in a table format and view details of a specific user.  
3. Update: Edit existing user records.  
4. Delete: Remove user records with a confirmation prompt.  

Folder Structure:  
- routes/index.js: Contains all CRUD routes for user operations.  
- models/User.js: Defines the MongoDB schema for the user data.  
- views/: Contains EJS template files for rendering HTML pages.  

Technologies Used:  
- Backend: Node.js, Express.js  
- Database: MongoDB with Mongoose  
- Templating Engine: EJS (Embedded JavaScript)  

How to Run the Project:  
1. Clone the repository.  
2. Install dependencies using `npm install`.  
3. Start the server with `npm start`.  
4. Access the application at `http://localhost:3000`.  

Routes Overview:  
- GET /: Displays the homepage.  
- GET /add: Displays the form to add a new user.  
- POST /add: Handles the creation of a new user record.  
- GET /display: Displays all user records in a table format.  
- GET /show/:id: Displays details of a specific user.  
- GET /delete/:id: Deletes a user record by ID.  
- GET /edit/:id: Displays a form to edit an existing user record.  
- POST /update/:id: Updates a user record.  

Usage:  
Users can add, edit, delete, and view user information directly via the provided routes. The data is displayed dynamically using EJS templates.  

This project demonstrates basic CRUD functionality and serves as a starting point for learning Express.js and MongoDB integration.
