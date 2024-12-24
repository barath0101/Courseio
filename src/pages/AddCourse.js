import React, { useState } from 'react';
import './AddCourse.css';

const AddCourse = () => {
  const [courseTitle, setCourseTitle] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [courseImage, setCourseImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', courseTitle);
    formData.append('description', courseDescription);
    formData.append('image', courseImage);

    try {
      const response = await fetch('http://localhost:8080/api/courses', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        const data = await response.json();
        console.log('Course added:', data);
      } else {
        console.error('Failed to add course');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Add Engineering Courses</h2>
      <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow-sm">
        <div className="mb-3">
          <label htmlFor="courseTitle" className="form-label">Course Title</label>
          <input 
            type="text" 
            className="form-control" 
            id="courseTitle" 
            value={courseTitle}
            onChange={(e) => setCourseTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="courseDescription" className="form-label">Course Description</label>
          <textarea 
            className="form-control" 
            id="courseDescription" 
            rows="5"
            value={courseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="courseImage" className="form-label">Course Image</label>
          <input 
            type="file" 
            className="form-control" 
            id="courseImage" 
            onChange={(e) => setCourseImage(e.target.files[0])}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Add Course</button>
      </form>
    </div>
  );
}

export default AddCourse;
