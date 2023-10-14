import { Routes, Route } from "react-router-dom";

// Views
import Homepage from "../views/Homepage";

const Router = () => {
  return (
    <Routes>
      {["/home", "/"].map(path => (
        <Route path={path} element={<Homepage />} key={path} />
      ))}
    </Routes>
  )
}

export default Router