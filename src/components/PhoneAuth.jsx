import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const PhoneAuth = ()=>{
    const [inputValue, setInputValue] = useState();
    const [name, setName] = useState('');
  const [mobile, setMobile] = useState();
    const [bool,setBool] = useState(false);
    const navigate = useNavigate();


    function handleInputChange(e){
        setInputValue(e.target.value);
    }
    function handleButtonClick(e)
    {
        if( inputValue == 'HRV100'){
            setBool(true);
            console.log("BOOL HAS BEEN SET TO TRUE");
        }
        else{
        setBool(false);
        }
    }

    return(
        <>
        <div>
            <span>Enter Movie Code : </span>
            <input
         type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a movie code"
      />
      <button onClick={handleButtonClick}>Check Movie Code</button>
        </div>



        {bool && 
        
            <div>
                <h1>Verify Mobile Phone:</h1>
      <input
        type="text"
        value={name}
        onChange={(e)=>{setName(e.target.value)}}
        placeholder="Enter your name"
      />
      <br />
      <input
        type="text"
        value={mobile}
        onChange={(e)=>{setMobile(e.target.value)}}
        placeholder="Enter your mobile number"
      />
      <br />
      <button onClick={()=>{navigate('/verify-otp')}}>Submit</button>
            </div>
        }
        </>
    )
}