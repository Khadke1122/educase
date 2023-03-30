import {  Paper } from '@mui/material'
import React from 'react'
import CreateAccount from './component/creatAccount/CreateAccount'
import LastPage from './component/creatAccount/lastPage/LastPage'
import FirstPage from './component/firstpage/FirstPage'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AreadyRegister from './component/creatAccount/alreadyregister/AreadyRegister'



// import FirstPage from './component/firstpage/FirstPage'

const App = () => {
  return (
  
  
   <Paper elevation={20}>
    <div className='bigContainer'>
   <BrowserRouter>
  
   <Routes>
    <Route path="/" element={<FirstPage />}></Route>
    <Route path="/CreateAccount" element={<CreateAccount />}></Route>
    <Route path='/LastPage' element={<LastPage />}></Route>
    <Route path="/AreadyRegister" element={<AreadyRegister />}></Route>
   </Routes>
   </BrowserRouter>
  
  

    </div>
    </Paper>
   
   
  )
}

export default App
