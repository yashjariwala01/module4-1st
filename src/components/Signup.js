import React, {useState} from "react";

function SignUp(){
    
    let [userData , setUserData] = useState({name:"" , email:"", password:"", confirmPassword:""});
    console.log(userData);
    let [errorMsg1 , setErrorMsg1] = useState("");
    let [errorMsg2 , setErrorMsg2] = useState("");
    let [errorMsg3 , setErrorMsg3] = useState("");
    let [successMsg , setSuccessMsg] = useState("");


    function validate(e) {
        e.preventDefault();
        let arr = Object.keys(userData);
        let newError = "";
      //form validate
        arr.map((val) => {
          if (userData[val] === "") {
            newError = "Error: All The fields are mandatory";
          }
        });
        setErrorMsg1(newError);
        console.log( newError , errorMsg1);

        //email validate
        if(!validateEmail(userData.email)){
            setErrorMsg2("Please enter a valid email")
        }else{
            setErrorMsg2("")
        }

        //password validate
        if(userData.password !== userData.confirmPassword){
            setErrorMsg3("Password and Confirm Password mismatch")
        } else{
            setErrorMsg3("")
        }

        //validation
        if( errorMsg1==="" && errorMsg2==="" && errorMsg3==="" && userData.password!=="" && userData.password === userData.confirmPassword ){
            setSuccessMsg("Successfully Signed Up")
        }else{
            setSuccessMsg("")
        }

      }

      function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
      }
      
      
    return (
        <div className="form">
            <h1>Signup</h1>

            <input type="text" placeholder="Full Name" 
            onChange={(e) => {setUserData({...userData, name: e.target.value})}} />

            <input type="email" placeholder="Email" 
            onChange={(e) => {setUserData({...userData, email: e.target.value})}} />

            <input type="text" placeholder="Password" 
            onChange={(e) => {setUserData({...userData, password: e.target.value})}} />

            <input type="password" placeholder="Confirm Password" 
            onChange={(e) => {setUserData({...userData, confirmPassword: e.target.value})}} />

            <div>
                <div className="error-msg">{errorMsg1} </div>
                <div className="error-msg">{errorMsg2} </div>
                <div className="error-msg">{errorMsg3} </div>
                <div className="success-msg">{successMsg} </div>

            </div>
            <button type="button" onClick={validate}>Sign Up</button>
        </div>
    );
}


export default SignUp;