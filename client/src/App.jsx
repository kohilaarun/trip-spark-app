import "./App.scss";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import { Route, Routes } from "react-router-dom";
import VehiclePage from "./components/VehiclePage";
import AccordionBar from "./components/AccordionBar";
import CreateAccountPage from "./components/CreateAccountPage";
import LoginForm from "./components/LoginForm";
import BookingPage from "./components/BookingPage";
import { useState } from "react";
import { authContext } from "./contexts/authContext";
import FooterPage from "./components/FooterPage";

const { Provider } = authContext;

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <div className="d-flex flex-column min-vh-100">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/vehicles/:type" element={<VehiclePage />} />
          <Route path="/faq" element={<AccordionBar />} />
          <Route path="/create-account" element={<CreateAccountPage />} />
          <Route path="/sign-in" element={<LoginForm />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
        <FooterPage />
      </div>
    </Provider>
  );
}

export default App;
