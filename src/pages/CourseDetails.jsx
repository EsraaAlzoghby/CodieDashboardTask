import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const [course, setCourse] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const storedCourses = JSON.parse(localStorage.getItem("courses")) || [];
    const courseDetails = storedCourses.find(course => course.id === id);
    setCourse(courseDetails);
  }, [id]);

  if (!course) return <div>Loading...</div>;

  return (
    <div className="container mt-4">
      <h2>{course.name}</h2>
      <img src={URL.createObjectURL(course.image)} alt={course.name} style={{ width: "100%" }} />
      <p><strong>Description:</strong> {course.description}</p>
      <p><strong>Start Date:</strong> {course.startDate}</p>
      <p><strong>End Date:</strong> {course.endDate}</p>
      <p><strong>Price:</strong> {course.price}</p>
    </div>
  );
};

export default CourseDetails;
