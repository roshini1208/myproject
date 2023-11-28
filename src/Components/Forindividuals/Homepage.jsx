import React from 'react';
import Navbar from './Navbar';
import{ Button, Avatar}from '@mui/material';
//import HorizontalLinearStepper from './SwipeableTextMobileStepper';
import PopperPopupState from './PopperPopupState';
import './homepage.css'
import Success from './Success';
import HorizontalLinearStepper from './HorizontalLinearStepper';
import Footer from './Footer';
import Rating from '@mui/material/Rating';
import { useNavigate } from 'react-router-dom';
import './logo.css'
const Homepage = () => {
  const backgroundImageUrl = 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Hl4UkGjIHCWwY2okX77F9GtNYXiSwglUJcp-BqtyrT9V7s98LTKDzdnKt0TO5R0KUKc&usqp=CAU")';

  const styles = {
    background: backgroundImageUrl,
  
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width:'100%' ,
    paddingUp: '2%',// Adjust the height as needed
  };
  const n=useNavigate();
  const handleyou=()=>{
    n('/hello');
  }
  const n1=useNavigate();
  const handle5=()=>{
    n1('/browser');
  }
  return (
    <>
    <div>

      <div style={{backgroundImage:'url("https://img.freepik.com/free-vector/watercolor-sugar-cotton-clouds-background_52683-80661.jpg")',backgroundRepeat:'no-repeat', backgroundSize: 'cover',
    
    height: '100vh',
    width:'100%' ,
    paddingUp: '2%'}}>
        <br></br>
        <Navbar/>
        <br></br><br></br><br></br>
        <div style={{alignItems:'center',justifyContent:'space-around'}}>
          <h1>NOT ALL OF US CAN DO GREAT THINGS</h1>
          <h1>BUT WE CAN DO SMALL THINGS</h1>
          <h1>WITH GREAT LOVE</h1>
          <h2>so start with</h2>
        </div>
       
        <br></br>
      </div>
      <div style={{backgroundColor:"#DFEBEB"}}>
        <div >
          <br></br>
          <h1>Start a fund raiser in just three steps</h1>
        </div>
        <div>
          <HorizontalLinearStepper/>
        </div>
        <div>
        <Button variant="outlined" style={{color:'black',borderColor:'black'}} onClick={handleyou}><h3>Start fundraising...</h3></Button>
        </div>
        <h1>If you need any help contact us through</h1>
        <div id='first' style={{backgroundColor: '#DFEBEB'}}>
              {/* <ul><Avatar src="https://cdn.vectorstock.com/i/preview-1x/61/86/instagram-icon-white-vector-25226186.webp" /></ul>
              <ul><Avatar src="https://cdn.vectorstock.com/i/preview-1x/02/37/logo-facebook-vector-31060237.webp" /></ul>
              <ul><Avatar src="https://cdn.vectorstock.com/i/1000x1000/75/54/google-logo-vector-28387554.webp" /></ul> */}
            </div>
            <PopperPopupState/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
      </div>
      <br></br>
      <div style={{backgroundColor:'#FFCBCB'}}>
        <br></br>
        <br></br>
      <h2>Success Stories</h2>
      <br></br>
      <div id="second">
        <Success/>

      </div>
      <div>
        <Footer/>
      </div>
    </div>
      <div style={{backgroundColor:'peachpuff'}}>
        <br></br>
           <h1>Logo</h1>
           <hr style={{width:'50%'}}></hr>
           <h2>For any queries</h2>
           <h3>Email:abc@gmail.com</h3>
           <h3>Contact No: 9876543210</h3><br></br>
           <h2>Give Rating And Promote Us</h2>
           <Rating name="half-rating" defaultValue={2.5} precision={0.5} /><br></br>
           <hr></hr>
           <h5>Copyright ©️ 2023 Ketto Online Ventures Pvt Ltd. All Rights Reserved.
Terms of Use |
 Privacy Policy |
 AML Policy |
 Use of cookies </h5>
       <h2>Start Monthly Donation To Save Lives</h2>
       <Button variant='contained'>Start Giving Monthly</Button>
        </div>
      </div>
    </>
  );
};
export default Homepage;