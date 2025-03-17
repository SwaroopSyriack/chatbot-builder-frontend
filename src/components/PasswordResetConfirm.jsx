import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthService from "../services/authService";



const PasswordResetConfirm = () => {

    const [formData, setFormData] = useState({
        password1: "",
        password2: ""});
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const {uid , token} = useParams();

    const handleChange = (e)=>
    {
        const {name , value} = e.target;
        setFormData(prevdata => ({...prevData , [name] : value}));
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setMessage("")

        if (formData.password1 !== formData.password2)
        {
            setMessage("Password is not Matching");
            return;
        }

        const result = AuthService.passwrd_reset_confirm(uid,token,formData.password1,formData.password2);

        if (result.sucess){
            setMessage(result.message)
            navigate('/login')

        }
        else{
            setMessage(result.data?.non_field_errors?.[0] || result.message)
        }

    }
    return(
        <div>
      <h2>Reset Your Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={FormData.password1}
          onChange={handleChange}
          placeholder="New Password"
          required
        />
        <input
          type="password"
          value={FormData.password2}
          onChange={handleChange}
          placeholder="Confirm Password"
          required
        />
        <button type="submit">Reset Password</button>
      </form>
      {message && <p>{message}</p>}
    </div>
    );

};

export default PasswordResetConfirm;