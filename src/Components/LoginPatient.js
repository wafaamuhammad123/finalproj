
import React, {useState} from "react";



const LoginPatient = () =>{
    const[newpatvalues,setnewpatvalues]=useState({
        fullname:"",
        email:"",
        password:"",
    });
   

    const handleChange=(event)=>{
setnewpatvalues({
...newpatvalues,
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
        <label className="label"> Last name</label>
            <input className="input" type="text" name="fullname" value={newpatvalues.fullname} 
            onChange={handleChange}>

            </input>
 

 </div>

 <div className="password">
        <label className="label"> Password</label>
            <input className="input" type="password" name="password" value={newpatvalues.password}
            onChange={handleChange}>
            </input>
            
 </div>

<div>
    
   
<button className="submit" onClick={handleFormSubmit}> Sign in </button>

    </div> 
</form>
      </div>
  </div>
  );
};
export default  LoginPatient;