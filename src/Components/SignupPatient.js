import React, {useState} from "react";

const SignupPatient = () =>{
    const[patValues,setpatValues]=useState({
        fullname:"",
        email:"",
        password:"",
    });
   

    const handleChange=(event)=>{
setpatValues({
...patValues,
[event.target.name]: event.target.value,

})

    }
    const handleFormSubmit=(event)=>{
        event.preventDefault();
    };
  return (<div className="container">
      <div className="app-wrapper">
          <div>
          <h2 className="title"> create Account

          </h2>
      </div>


<form className="form-wrapper">
    <div className="name">
        <label className="label"> Fisrt name</label>
            <input className="input" type="text" name="fullname" value={patValues.fullname} 
            onChange={handleChange}>

            </input>
 

            <div className="name">
        <label className="label"> Last name</label>
            <input className="input" type="text" name="fullname" value={patValues.fullname} 
            onChange={handleChange}>

            </input>
 

 </div>
 <div className="email">
        <label className="label"> Email</label>
            <input className="input" type="email" name="email" value={patValues.email
            
            }  onChange={handleChange}>
               
            </input>
          
        
 </div>


 <div className="password">
        <label className="label"> Password</label>
            <input className="input" type="password" name="password" value={patValues.password}
            onChange={handleChange}>
            </input>
            
 </div>

<div>
    
    
<button className="submit" onClick={handleFormSubmit}> Sign Up </button>

    </div>
 
    
     </div>
</form>
      </div>
  </div>
  );
};
export default  SignupPatient;