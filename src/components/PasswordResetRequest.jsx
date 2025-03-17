import React, { useState } from "react";
import AuthService from "../services/authService";
import "../styles/PasswordReset.css";

const PasswordResetRequest = () => {

  const [formData, setFormData] = useState({
    email : "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setFormData({...formData,[e.target.name]: e.target.value,});
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    console.log({email: formData.email,})

    const result = await AuthService.passwrd_reset(formData.email);

    setMessage(result.sucess ? result.message : result.data?.non_field_errors?.[0] || result.message);


    setLoading(false);
  };

  return (
    <div className='container'>
      <div className="form login">
      <div className="form-content">
        <header>Password Reset</header>
        <form onSubmit = {handleSubmit}>
          <div className="field input-field">
            <input type="email"
                 name="email"
                 placeholder="Enter your email"
                 value={formData.email}
                 onChange={handleChange}
                 required 
                 className ="input"/>
          </div>
         
          <div className="field button-field">
            <button>Send</button>
          </div>
          {message && <div className="message">{message}</div>}
        </form> 
      </div>
      
    </div>
    </div>
  );

};

export default PasswordResetRequest; 
