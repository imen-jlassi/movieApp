import "./App.css";
import React ,{useState} from 'react'

import Movie from "./pages/Movie";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { BrowserRouter, Route, Switch } from "react-router-dom" 
import Navbar from "./Compponet/Navbar";
import Footer from "./Compponet/Footer";




function App() {
  
// state

// Function 


 return (<div>
   <BrowserRouter>
   <div>
   <Navbar/> 
 <Switch>
 <Route exact path="/" component={Home} />   
 <Route exact path="/Movie" component={Movie}  /> 
 <Route exact path="/Contact" component={Contact} />
 </Switch>
 <Footer/>

</div>
 
 
 </BrowserRouter>
    </div>

  );
}
export default App;