import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import PasswordResetRequest from "./components/PasswordResetRequest";
import PasswordResetConfirm from "./components/PasswordResetConfirm";
import FaqPage from "./pages/FaqPage";
import AuthContext from "./services/AuthContext";
import Signup from "./components/RegisterFirebase";
import Login from "./components/LoginFirebase";

const RegisterAndLogout = () => {
  useEffect(() => {
    localStorage.clear(); // Clear tokens on component mount
  }, []);

  return <Register />;
};

function App() {
  return (
    <AuthContext>
      <Router>
        <Routes>
          {/* <Route path="/register" element={<RegisterAndLogout />} /> */}
          <Route path="/register" element={<Signup />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/create/faq" element={<FaqPage />} />
          <Route path="/passwordreset" element={<PasswordResetRequest />} />
          <Route
            path="/password-reset-confirm/:uid/:token/"
            element={<PasswordResetConfirm />}
          />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </AuthContext>
  );
}

export default App;
