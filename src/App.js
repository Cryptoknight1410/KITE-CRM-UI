import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import Signup from './Components/Signup';
import Navbar from './Components/Navbar';

function App() {
  return (
   <>
   <Navbar/>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login></Login>}/> 
    <Route path="/Signup" element={<Signup></Signup>}/> 
   </Routes>
   </BrowserRouter>
    {/* <Signup></Signup> */}
   </> 
  );
}

export default App;
