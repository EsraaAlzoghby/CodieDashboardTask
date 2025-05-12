import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CoursesList = () => {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));
  const userEmail = user?.email;

  useEffect(() => {
    if (userEmail) {
      const userCourses = JSON.parse(localStorage.getItem(userEmail)) || [];
      setCourses(userCourses);
    }
  }, [userEmail]);

  const handleDelete = (id) => {
    const updatedCourses = courses.filter((course) => course.id !== id);
    setCourses(updatedCourses);
    localStorage.setItem(userEmail, JSON.stringify(updatedCourses));
  };

  const filteredCourses = courses.filter((course) =>
    (course.title || "").toLowerCase().includes(search.toLowerCase()) ||
    (course.description || "").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2>Course List</h2>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search by title or description..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredCourses.length > 0 ? (
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Description</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCourses.map((course) => (
              <tr key={course.id}>
                <td>
                  {course.image ? (
                    <img
                      src={course.image}
                      alt={course.title}
                      style={{ width: "60px", height: "auto" }}
                    />
                  ) : (
                    "No image"
                  )}
                </td>
                <td>{course.title}</td>
                <td>{course.description}</td>
                <td>{course.startDate}</td>
                <td>{course.endDate}</td>
                <td>{course.price}</td>
                <td>
                  <Link
                    to={`/courses/edit/${course.id}`}
                    className="btn btn-warning btn-sm me-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(course.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No courses found.</p>
      )}

      <Link to="/courses/new" className="btn btn-primary mt-3">
        Add New Course
      </Link>
    </div>
  );
};

export default CoursesList;
