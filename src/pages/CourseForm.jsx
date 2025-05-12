import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CourseForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = !!id;

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    startDate: "",
    endDate: "",
    price: "",
  });

  const user = JSON.parse(localStorage.getItem("user"));
  const userEmail = user?.email;

  useEffect(() => {
    if (isEdit && userEmail) {
      const userCourses = JSON.parse(localStorage.getItem(userEmail)) || [];
      const courseToEdit = userCourses.find((course) => course.id === id);
      if (courseToEdit) {
        setFormData(courseToEdit);
      }
    }
  }, [id, isEdit, userEmail]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(files[0]);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.description) {
      alert("Please fill all required fields.");
      return;
    }

    const userCourses = JSON.parse(localStorage.getItem(userEmail)) || [];

    if (isEdit) {
      const updatedCourses = userCourses.map((course) =>
        course.id === id ? { ...formData, id } : course
      );
      localStorage.setItem(userEmail, JSON.stringify(updatedCourses));
    } else {
      const newCourse = { ...formData, id: Date.now().toString() };
      userCourses.push(newCourse);
      localStorage.setItem(userEmail, JSON.stringify(userCourses));
    }

    navigate("/courses");
  };

  return (
    <div className="container mt-5">
      <h2>{isEdit ? "Edit Course" : "Add New Course"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Course Title *</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Description *</label>
          <textarea
            className="form-control"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Image</label>
          <input
            type="file"
            className="form-control"
            name="image"
            onChange={handleChange}
            accept="image/*"
          />
          {formData.image && (
            <img
              src={formData.image}
              alt="Preview"
              className="mt-2"
              style={{ width: "100px", height: "auto" }}
            />
          )}
        </div>

        <div className="mb-3">
          <label>Start Date</label>
          <input
            type="date"
            className="form-control"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>End Date</label>
          <input
            type="date"
            className="form-control"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Price</label>
          <input
            type="number"
            className="form-control"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          {isEdit ? "Update Course" : "Add Course"}
        </button>
      </form>
    </div>
  );
};

export default CourseForm;
