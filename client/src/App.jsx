import "./App.scss";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import { Route, Routes } from "react-router-dom";
import VehiclePage from "./components/VehiclePage";
import AccordionBar from "./components/AccordionBar";
import CreateAccountPage from "./components/CreateAccountPage";
import LoginForm from "./components/LoginForm";
import BookingPage from "./components/BookingPage";
import FooterPage from "./components/FooterPage";
import AuthProvider from "./contexts/authContext";
import BookingProvider from "./contexts/bookingContext";
import MyBookings from "./components/MyBookings";

function App() {
  return (
    <AuthProvider>
      <BookingProvider>
        <div className="d-flex flex-column min-vh-100">
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/vehicles/:type" element={<VehiclePage />} />
            <Route path="/faq" element={<AccordionBar />} />
            <Route path="/create-account" element={<CreateAccountPage />} />
            <Route path="/sign-in" element={<LoginForm />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/my-booking" element={<MyBookings />} />
          </Routes>
          <FooterPage />
        </div>
      </BookingProvider>
    </AuthProvider>
  );
}

export default App;
