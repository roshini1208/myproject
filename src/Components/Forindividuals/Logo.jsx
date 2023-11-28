//Login
import React, { useState } from 'react'
import { Button, Paper,TextField,FormControlLabel,Checkbox} from '@mui/material';
import './box.css'
// import {  Outlet } from 'react-router-dom';
// import { useState } from 'react';

// import Snackbar from '@mui/material/Snackbar';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Logo = () => {
    const [password,setPassword]=useState('');
    const[type1,setType1]=useState('password');
    const[checked,setChecked]=useState(false)
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [email,setEmail]=useState('');
    const [userName,setUserName]=useState('');
    const navigate=useNavigate();
   
    
    const handle2= async()=>{
     
      navigate('/brow');
      const response =await axios.post('http://localhost:3001/posts',{
       Name:firstName,
       Password :password,
      });
    }
    function handlepassword(e){
      setPassword(e);
      var re={
        'cap':/[A-Z]/,
        'num': /[0-9]/,
        'except':/[aeiou]/,
        'full':/[@#][A-Za-z0-9]{7,13}$/
      };
      return (re.cap.test(e) && re.num.test(e) && !re.except.test(e) && re.full.test(e)) ;
    }
    function handlebox(){
      if(type1==='password'){
        setChecked(true);
        setType1('text')
      }
      else if(type1!=='password'){
        setChecked(false);
        setType1('password');
      }
    }
    
  return (
    <>
      <div id='box-shadow'>
      
        <Paper elevation={24}
            sx={{
              width:'500px',
              margin:'auto',
              height:'600px',
              justifyContent:'center',
              alignContent:'center',
          }}
            >
              <br></br>
              <br></br>
              <form onSubmit={handle2}>
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
              <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
              </svg>
              <br></br>
              <br></br>
                <div style={{display:'flex', justifyContent:'space-around'}}>
              <label>
                <TextField id="outlined-basic" label="FirstName" variant="outlined" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}/>
                </label>  
              <label>
                <TextField id="outlined-basic" label="LastName" variant="outlined" value={lastName} onChange={(e)=>{setLastName(e.target.value)}}/>
                </label>  
                </div>
                <br></br>
                <label>
                  <TextField id='outlined-basic' label="UserName" variant='outlined' style={{width:'470px'}} value={userName} onChange={(e)=>{setUserName(e.target.value)}}/>
                </label>
                <br></br>
                <br></br>
                <label>
                  <TextField id='outlined-basic' label="Email" variant='outlined' style={{width:'470px'}} value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                </label>
                <br></br>
                <br></br>
                <div>
                  <label>
                    <TextField id='outlined-basic' type={type1} label="Password" variant='outlined' style={{width:'470px'}} value={password} onChange={(e)=>{handlepassword(e.target.value)?console.log('valid passwored') : console.log('invalid password')}}/>
                  
                  </label>
                  <FormControlLabel control={<Checkbox />} label="ShowPassword" onChange={handlebox}/>
                </div>
                
                {/* {handlepassword(password) && (<p>true</p>)} */}

                <div>
                  <p>Already a member? <Button variant='text'>Login</Button></p>
                </div>
                <Button  type="submit" variant='outlined'   >SignUp</Button>
              </form>
            </Paper>
      </div>
      {/* <Outlet/> */}
    </>
  )
}


export default Logo