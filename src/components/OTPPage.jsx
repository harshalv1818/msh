import React,{useState} from "react";   
import './OTPPage.css'
import { useNavigate } from "react-router-dom";

const dumOtp = 123456;
export const OTPPage = ()=>{

  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setOtp(e.target.value);
    setError(''); // Clear error message on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (otp.length !== 6) {
      setError('OTP must be 6 digits.');
      return;
    }

    // Simulate OTP verification
    console.log('Verifying OTP:', otp);
    // Add your verification logic here (e.g., API call)
    if(otp ==dumOtp)
    {
        navigate('/ticket-form')
    }
    else{
        setError("OTP Verification Failed. Please try again..")
    }
    // Redirect or show success message after verification
  };


    return(
        <>
         <div className="container">
      <h1>OTP Verification</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={otp}
          onChange={handleChange}
          placeholder="Enter OTP"
          className="input"
          maxLength={6} // Limit input length to 6
          required
        />
        {error && <p className="error">{error}</p>}
        <button type="submit" className="button">Verify OTP</button>
      </form>

      
    </div>
        </>
    )
}