/*username, useremail, password, gender, dob , address

Register, Cancel*/
import "./Comp1.css";


import './ClassComp'

function Form(){
    return (<div >
            <form>
                <div className="container">

                
             <span>
                <label>Username</label> 
             <input type="text"></input> <br></br>
             </span>

             <label>useremail</label>
             <input type="text"></input>   <br></br>

             <label>password</label>
             <input type="password"></input>   <br></br>

            <label>Select Gender</label>
            <select name="Gender">
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
            </select>
                                                <br></br>

             <label>DOB</label>
             <input type="date"></input>  <br></br>

             <label>address</label>
             <input type="text"></input>  <br></br>

             <button>Register</button>

             <button>Cancel</button>
</div>

            </form>
    </div>);
} 






export default Form;