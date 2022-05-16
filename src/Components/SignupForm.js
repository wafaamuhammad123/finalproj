import React, {useState} from "react";

const SignupForm = () =>{
    const[Values,setValues]=useState({
        fullname:"",
        email:"",
        password:"",
    });
   

    const handleChange=(event)=>{
setValues({
...Values,
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
            <input className="input" type="text" name="fullname" value={Values.fullname} 
            onChange={handleChange}>

            </input>
 

            <div className="name">
        <label className="label"> Last name</label>
            <input className="input" type="text" name="fullname" value={Values.fullname} 
            onChange={handleChange}>

            </input>
 

 </div>
 <div className="email">
        <label className="label"> Email</label>
            <input className="input" type="email" name="email" value={Values.email
            
            }  onChange={handleChange}>
               
            </input>
          
        
 </div>


 <div className="password">
        <label className="label"> Password</label>
            <input className="input" type="password" name="password" value={Values.password}
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
export default  SignupForm;

