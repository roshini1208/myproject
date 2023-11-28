
import './App.css';
 import Routong from './Components/Forindividuals/Routong';
function App() {
  return (
    <div className="App">
     
       <Routong/> 
       
    </div>
  );
}
export default App;

// import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
// import Homepage1 from './Components/Forindividuals/Homepage1';
// import Homepage from './Components/Forindividuals/Homepage';
// import Logo from './Components/Forindividuals/Logo';
// import PrivateRoutes from './Components/Forindividuals/PrivateRoutes';
// function App(){
//   return(
//      <div>
//         <Router>
         
//             <Route element={<PrivateRoutes/>}>
//               <Route element={<Homepage/>} path="/" exact/>
//               <Route element={<Homepage1/>} path="/home" exact/>
//             </Route>
//             <Route component={Logo} path="login"/>
          
//         </Router>
//      </div>
//   )
  
// }
// export default App;