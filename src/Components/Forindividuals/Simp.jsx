import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
export default function Simp() {
    const navigate=useNavigate();
    const handle=()=>{
       navigate('/browse')
    }
    
  return (
      <Box style={{justifyContent:'center'
  }}
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: '50%',
          height:' 90%',
        },
      }}
    >
     
      <Paper elevation={3}>
        <div style={{textAlign:'center',color:'black'}}><h1>Volunteer's Form</h1></div>
      <div style={{display: 'flex',flexDirection: 'row', justifyContent:'space-evenly'}}>
        <div>
        
            <div style={{paddingRight:'120px'}}><h3>First   Name   : </h3></div>
            <TextField id="outlined-basic" label="First Name" variant="outlined" />
            <div style={{paddingRight:'120px'}}><h3>Last Name : </h3></div>
           <TextField id="outlined-basic" label="Last Name" variant="outlined" />
            <div style={{paddingRight:'90px'}}><h3>Email Address:</h3></div>
           <TextField id="outlined-basic" label="Email Address" variant="outlined" />
            <div style={{paddingRight:'140px'}}><p><h3>Address:</h3></p> </div>
           <TextField id="outlined-basic" label="Address" variant="outlined" />
            <div style={{paddingRight:'100px'}}><h3>Phone number:</h3></div>
           <TextField id="outlined-basic" label="Phone Number" variant="outlined" />
            <FormGroup>
             <FormControlLabel required control={<Checkbox />} label="I agree to the Terms & condition" />
            </FormGroup>
        </div>
       
    </div>
    <Button onClick={handle}variant='outLined'><h2>Submit</h2></Button>
        </Paper> 
    </Box>
  );
}