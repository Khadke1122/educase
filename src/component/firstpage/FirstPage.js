import "./firstpage.css"
import React from 'react'
import CreateAccount from "../creatAccount/CreateAccount"
import { Button } from "@mui/material"
import { Link } from "react-router-dom"



const FirstPage = () => {

  return (
    <div className="container">
      <div className="abcd"></div>
        <div className="box">
            <h1 style={{marginLeft:"20px"}}>Welcome to PopX</h1>
        <p className="bottom" style={{marginLeft:"20px"}}>Lorem ipsum dolor sit amet consectetur <br/>adipisicing elit.
 Minus laboriosam quidem.</p>
 <div className="btnflex">
  <div><button className="btnone"> <Link to="/CreateAccount" style={{color:"#ffff"}}>Create Account</Link></button></div>
  {/* <div><a href={<CreateAccount />}> <button className="btntwo">Already Registered?Login</button> </a></div> */}

  <div><button className="btntwo"> <Link to="/AreadyRegister" style={{color:"#000000" }}>Already Registered?Login</Link></button></div> 
  

 </div>
        </div>
    </div>
  )
}

export default FirstPage


