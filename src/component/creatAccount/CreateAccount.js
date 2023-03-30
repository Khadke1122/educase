import "./createAccount.css"
import React from 'react'
import Form from 'react-bootstrap/Form';
import LastPage from "./lastPage/LastPage";

import InputText from "./InputText";
import { Link } from "react-router-dom";

const CreateAccount = () => {
 
  return (
   
    <div className="container">
        <div className="box">


            <h2 style={{marginLeft:"7px", marginTop:"60px"}}> Create your <br />PopX account</h2>
            <InputText />
            <div  className="innerElm">
            <div className="agency"><p>Are you an Agency? </p> <p className="star">*</p></div>
            </div> 

            <div className="radioBtn">
                <div>
            <Form>
      {['radio'].map((type) => (
        <div key={`${type}`} className="mb-3">
          <Form.Check
            type={type}
            id={`disabled-default-${type}`}
          />
        </div>
      ))}
    </Form>
    </div>
    <div>Yes</div>

    <div>
            <Form>
      {['radio'].map((type) => (
        <div key={`${type}`} className="mb-3">
          <Form.Check
            type={type}
            id={`disabled-default-${type}`}
          />
        </div>
      ))}
    </Form>
    </div>
    <div>No</div>
            </div>
        </div>
        <div> <button className="btn"> <Link to="/LastPage" style={{color:"#ffff"}}>Create Account</Link></button></div>
    </div>
  
  )
}

export default CreateAccount