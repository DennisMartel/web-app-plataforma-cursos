import { Routes, Route } from "react-router-dom";

// Views
import Homepage from "../views/Homepage";
import CourseDetails from "../views/CourseDetails";

const Router = () => {
  return (
    <Routes>
      {["/home", "/"].map(path => (
        <Route path={path} element={<Homepage />} key={path} />
      ))}
      <Route path="/course/:slug" element={<CourseDetails />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  )
}

export default Router