import React, { useState } from 'react';
import authService from '../services/authService';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faRocket, faBolt } from "@fortawesome/free-solid-svg-icons";
import '../styles/Registration.css'

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password1: '',
    password2: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)

     console.log({
      username: formData.username,
      email: formData.email,
      password1: formData.password1,
      password2: formData.password2,
    });

    const result = await authService.register(
      formData.username,
      formData.email,
      formData.password1,
      formData.password2
    );
    
   
    console.log(result);

    if (result.sucess) {

    alert(result.message);

    setMessage(result.message);

    setFormData({
      username: '',
      email: '',
      password1: '',
      password2: ''
    });
  }
else{
      alert("Error: " + result.message);
      
      if (result.data){
        let errorMessages = []

        Object.keys(result.data).forEach((field) => {errorMessages.push(`${field}: ${result.data[field].join(" ")}`);
      });
      setMessage(errorMessages.join("\n"));
      }
      else{
        setMessage(result.message)
      }

      
    }
  
  setLoading(false)

  };

  return (
    <div className="signup-container">
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
      
      <div className="signup-form-container">
        <form onSubmit={handleSubmit} className="signup-form">
          <h3>Create your account</h3>
          
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            />
          </div>
          
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Create a password"
              value={formData.password1}
              onChange={(e) => setFormData({ ...formData, password1: e.target.value })}
            />
          </div>
          
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm your password"
              value={formData.password2}
              onChange={(e) => setFormData({ ...formData, password2: e.target.value })}
            />
          </div>
          
          <button type="submit" className="signup-button" disabled= {loading}>
            {loading ? "Creating your account .." : "Create account"}
          </button>
          
          {message && <div className="message">{message}</div>}
          
          <div className="login-link">
            <span>Have an account?</span>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;