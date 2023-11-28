// src/Login.js
import React, { useState ,useContext} from 'react';
import { Paper, TextField, Button,Avatar } from '@mui/material';
import './logo.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DataContext from './DataProvider';

const Signin = () => { 
  const[username,setUsername]=useState('');
  const[password,setPassword]=useState('');
  const {username1, setUsername1, setTrue} = useContext(DataContext);
  const handleDonate = async (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
    await axios.get('http://localhost:3001/posts')
    .then(result=>{
      result.data.map(posts=>{
        if(posts.Name===username){
          if(posts.Password===password){
            navigate('/home')
            // alert("correct Password");
          }
          else{
            navigate('/')
            // alert("InCorrect Password");
          }
        }
        else{
          navigate('/')
          // alert("InCorrect Password");
        }
      })
    })
};
 
  const navigate=useNavigate();
  
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Paper elevation={12} style={{ padding: '20px', width: '300px' }}>
        <form onSubmit={handleDonate}>
          <div id='imagecon'>
        <Avatar src="https://cdn.vectorstock.com/i/1000x1000/25/26/user-login-or-access-authentication-icon-vector-6712526.webp" />
        </div>
          <h1 style={{textAlign:'center'}}>Log in</h1>
          <br></br>
          <TextField label="Username" variant="outlined" margin="normal" fullWidth value={username} onChange={(e)=>setUsername(e.target.value)}/>
          <br></br>
          <TextField label="Password" required type="password" variant="outlined" margin="normal" fullWidth value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
          <br></br>
          <br></br>
          <Button onClick={handleClick}>Submit</Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={username}
        action={action}
      /><br></br>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
         
          <br></br>
          <p>Or sign in using </p>
          <div id='it'>
           
          </div>
        </form>
      </Paper>
    </div>
  );
};

export default Signin;
