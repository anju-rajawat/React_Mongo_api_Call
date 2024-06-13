 import SignUp from "./component/SignUp";
 import {FetchData} from './component/FetchData';
import {Route ,Routes} from "react-router-dom";
// import {BrouserRouter} from 'react-dom';
 function App(){
  return <>
  


  <Routes>
{/* <Routes> */}
   <Route path='/' element={<SignUp/>}></Route>
   <Route path='/fethchdata' element={<FetchData/>}></Route>  `1Qz2`
{/* </Routes> */}
</Routes>

   </>
  
}

export default App;
