import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

//HOME Import
import Home from './pages/home';

//RESUME Import
import Resume from './pages/resume';

//Blog Import
import Blog from './pages/blog';

//PORTFOLIO Import
import Portfolio from './pages/portfolio';


//GRAND CENTRAL STATION
function App() {
  ReactDOM.render (
     <>
      <Router>
          <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/resume' element={<Resume/>}></Route>
            <Route exact path='/blog' element={<Blog/>}></Route>
            <Route exact path='/portfolio' element={<Portfolio/>}></Route>
          </Routes>
        </Router>
     </>,
     document.getElementById('root')
  );
}

export default App;
