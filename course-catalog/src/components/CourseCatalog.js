import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CourseCatalog.css'; // Ensure to import the CSS file for styles

function CourseCatalog() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/courses')
      .then(response => setCourses(response.data))
      .catch(error => console.error('Error fetching courses:', error));
  }, []);

  return (
    <div className="course-catalog">
      <h2>Available Courses</h2>
      <div className="course-cards">
        {courses.map(course => (
          <div className="course-card" key={course.id}>
            <img src={course.image} alt={course.name} />
            <div className="course-info">
              <h3>{course.name}</h3>
              <p>{course.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseCatalog;
