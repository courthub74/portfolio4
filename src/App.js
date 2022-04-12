import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

//HOME Import
import Home from './pages/home';


//GRAND CENTRAL STATION
function App() {
  ReactDOM.render (
     <>
      <Router>
          <Routes>
            <Route exact path='/' element={<Home/>}></Route>
          </Routes>
        </Router>
     </>,
     document.getElementById('root')
  );
}

export default App;
