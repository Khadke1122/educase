import "./already.css"
import React from 'react'
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const AreadyRegister = () => {
  return (
    <div style={{padding:"20px"}}>
          <div className="two">
            <h2 style={{marginLeft:"20px"}}>Sign to your <br /> PopX account</h2>
            <div style={{marginLeft:"20px"}}>Lorem ipsum dolor sit amet consectetur, <br />Obcaecati dicta tenetur ducimus architecto?</div>
          </div>
        <div className="two">
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 2, width: '38ch' },
      }}
      
    >
        <TextField label="Email address *"  defaultValue="MarryDoe@gmail.com" color="primary" focused />
        <TextField label="Password *"  defaultValue="Marry Doe" color="primary" focused />
        </Box>
        <div> <button className="btna"> <Link to="/LastPage" style={{color:"#ffff"}}>Login</Link></button></div>
        </div>
        <div className="footer"></div>
      
    </div>
  )
}

export default AreadyRegister