import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VehiclePage from "./components/VehiclePage";
import AccordionBar from "./components/AccordionBar";
import CreateAccountPage from "./components/CreateAccountPage";
import LoginForm from "./components/LoginForm";
import ContactUs from "./components/ContactUs";
import BookingPage from "./components/BookingPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/vehicles/:type" element={<VehiclePage />} />
          <Route path="/faq" element={<AccordionBar />} />
          <Route path="/create-account" element={<CreateAccountPage />} />
          <Route path="/sign-in" element={<LoginForm />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
