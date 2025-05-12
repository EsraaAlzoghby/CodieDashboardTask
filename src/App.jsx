import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CoursesList from "./pages/CoursesList";
import CourseForm from "./pages/CourseForm";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/courses"
          element={
            <PrivateRoute>
              <CoursesList />
            </PrivateRoute>
          }
        />
        <Route
          path="/courses/new"
          element={
            <PrivateRoute>
              <CourseForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/courses/edit/:id"
          element={
            <PrivateRoute>
              <CourseForm />
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={
            <PrivateRoute>
              <CoursesList />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
