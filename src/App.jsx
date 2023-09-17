import Appbar from "./components/Appbar"
import Signup from "./components/Signup"
import Signin from "./components/Signin"
import AdminCourses from "./components/AdminCourses"
import AdminCourseCard from "./components/AdminCourseCard"
import AddCourse from "./components/AddCourse"
import Course from "./components/Course"
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Appbar></Appbar>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signin" element= {<Signin />} />
          <Route path="/addCourse" element={<AddCourse />} />
          <Route path="/getCourses" element={<AdminCourses />} />
        </Routes>
    </Router>
  )
}

export default App
