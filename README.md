# Dashboard Application

This project is a simple dashboard web application with **Login Authentication**, **CRUD Operations**, **Responsive Design**, **Search & Filter**, and **Data Persistence** using **localStorage**. It is designed to allow administrators to manage courses or other items from a centralized dashboard.

## Features

### 1. **Login & Authentication**
- Secure login with user credentials.
- Role-based access control. Only authenticated users can access the dashboard.

### 2. **CRUD Operations**
- **Create**: Add new items (courses, for example).
- **Read**: View a list of items (display all stored courses).
- **Update**: Edit existing items.
- **Delete**: Remove items from the dashboard.


### 3. **Search & Filter**
- Users can quickly search and filter items (e.g., courses) based on their title or description.

### 4. **Data Persistence**
- Data is stored in **localStorage**, so the information persists across sessions. Users can view the data even after refreshing the page.

## Technologies Used

- **React**: Frontend library to build the user interface.
- **Bootstrap**: Used for responsive design and styling.
- **localStorage**: To store and retrieve data, ensuring persistence across sessions.
- **React Router**: For navigating between pages like Login, Dashboard, and Course Management.
