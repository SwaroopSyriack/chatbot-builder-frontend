// src/components/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/authService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faRocket, faBolt } from "@fortawesome/free-solid-svg-icons";
import "../styles/Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const result = await AuthService.login(formData.email, formData.password);

    if (result.sucess) {
      setMessage(result.message);
      navigate("/"); // Redirect to dashboard or any protected route
    } else {
      setMessage(result.data?.non_field_errors?.[0] || result.message);
    }

    setLoading(false);
  };

  return (
   <div className="Login-container">
         <div className="value-props">
           <img
             className="logo"
             src="https://res.cloudinary.com/subframe/image/upload/v1711417518/shared/fdb8rlpzh1gds6vzsnt0.svg"
             alt="Logo"
           />
           
           <div className="features">
             <div className="feature">
               <div className="feature-icon">
                 <FontAwesomeIcon icon={faLightbulb} />
               </div>
               <div className="feature-content">
                 <h3>Spark your imagination</h3>
                 <p>
                   Dive into a world where your creative ideas are instantly
                   brought to life. Let's paint your thoughts in digital strokes.
                 </p>
               </div>
             </div>
             
             <div className="feature">
               <div className="feature-icon">
                 <FontAwesomeIcon icon={faRocket} />
               </div>
               <div className="feature-content">
                 <h3>Simplify the complex</h3>
                 <p>
                   Say goodbye to mundane tasks. Our AI streamlines your workflow,
                   freeing you to focus on what truly matters.
                 </p>
               </div>
             </div>
             
             <div className="feature">
               <div className="feature-icon">
                 <FontAwesomeIcon icon={faBolt} />
               </div>
               <div className="feature-content">
                 <h3>Boost your brainpower</h3>
                 <p>
                   Elevate your learning with tailored insights and resources.
                   It's like having a personal coach in your pocket.
                 </p>
               </div>
             </div>
           </div>
         </div>
         
         <div className="login-form-container">
           <form onSubmit={handleSubmit} className="login-form">
             <h3>Log in to your account</h3>
             
             <div className="form-group">
               <label>Email</label>
               <input
                 type="email"
                 name="email"
                 placeholder="Email"
                 value={formData.email}
                 onChange={handleChange}
                 required
                 className="form-control"
               />
             </div>
             
             <div className="form-group">
               <label>Password</label>
              <input
                 type="password"
                 name="password"
                 placeholder="Password"
                 value={formData.password}
                 onChange={handleChange}
                 required
                 className="form-control"
               />
             </div>
             
             <button type="submit" className="login-button" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
             </button>
             
             {message && <div className="message">{message}</div>}
             
             <div className="login-link">
               <span>forgot your password?</span>
               <span>Create a Account?</span>
               
             </div>
           </form>
         </div>
       </div>
  );
};

export default Login;
