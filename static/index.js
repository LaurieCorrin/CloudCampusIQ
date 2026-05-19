import courseData from './course-data.js';
// e.g. {"id": 101, "course_name": "Introduction to Computer Science", "instructor_name": "Dr. Alan Turing", "department": "Computer Science"},
const courseList = document.getElementById('course-list');
for (const course of courseData) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<b>${course.course_name}</b> (${course.instructor_name})`;
    courseList.appendChild(listItem);
}