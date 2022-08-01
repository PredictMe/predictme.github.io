import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Overview from './components/Pages/Overview/Overview';
import Docs from './components/Pages/Docs/Docs';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Overview/>}/>
        <Route path='/Docs' element={<Docs/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
