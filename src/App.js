import React from "react"; 
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from "./component/Navbar"
import Indix from "./component/Indix/Indix";
import Contact from "./component/Contact"


function App() { 
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes> 
        <Route path="/" Component={Indix}/>
        <Route path="/Contact" Component={Contact}/>
      </Routes>
      </BrowserRouter> 
    </div>
  );
} 
export default App; 
