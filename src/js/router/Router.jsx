import { Routes, Route } from "react-router-dom";

// Views
import Homepage from "../views/Homepage";
import CourseDetails from "../views/CourseDetails";
import Cart from "../views/Cart";
import Checkout from "../views/Checkout";
import OrderConfirmed from "../views/OrderConfirmed";

const Router = () => {
  return (
    <Routes>
      {["/home", "/"].map(path => (
        <Route path={path} element={<Homepage />} key={path} />
      ))}
      <Route path="/course/:slug" element={<CourseDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/payment/checkout" element={<Checkout />} />
      <Route path="/order-confirmed" element={<OrderConfirmed />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  )
}

export default Router