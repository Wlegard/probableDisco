import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const axios = require('axios');
// Components
import Settings from './Settings.jsx';
import Search from './Search.jsx';
import Avatar from './Avatar.jsx';
import Library from './Library.jsx';
import Comments from './Comments.jsx';
import Queue from './Queue.jsx';
import Logo from '../images/slimewire.png';

function App() {
  const [searchQuery, setSearchQuery] = useState(''); 
  const [themes, setThemes] = useState([]);
  const [avatars, setAvatars] = useState([]);
  const [currentImage, setCurrentImage] = useState(
    'https://img.freepik.com/premium-vector/cute-green-slime-monster-illustration_799627-169.jpg'
  );

  return (
    <Router>
      <div>
        <img src={Logo} alt='App Logo' style={{ height: 115, width: 500 }} />

        {/* Nav Links */}
        <nav className='nav'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/settings'>Settings</Link>
            </li>
            <li>
              <Link to='/search'>Advanced Search</Link>
            </li>
            <li>
              <Link to='/avatar'>Avatar</Link>
            </li>
            <li>
              <Link to='/library'>Library</Link>
            </li>
            <li>
              <Link to='/comments'>Comments</Link>
            </li>
          </ul>
        </nav>

       
        <div className='main-content'>
            {/* Routes = Nav Link Page Paths */}
          <Routes>
            {/* Home/App */}
            {/* Homepage elements in this route div */}
            <Route
              path='/'
              element={
                <div>
                  <h1>Get Slimed</h1>
                  <Settings />
                   {/* Avatar */}
                  <img
                    src={currentImage}
                    style={{ width: '50%', height: 'auto' }}
                  />
                </div>
              }
            />
            {/* Settings */}
            <Route path='/settings' element={<Settings />} />
            {/* Search */}
            <Route path='/search' element={<Search />} />
            {/* Avatar */}
            <Route
              path='/avatar'Define your Routes here
              element={
                <Avatar
                  avatars={avatars}
                  setAvatars={setAvatars}
                  currentImage={currentImage}
                  setCurrentImage={setCurrentImage}
                />
              }
            />
            {/* Library */}
            <Route path='/library' element={<Library />} />
            {/* Comments */}
            <Route path='/comments' element={<Comments />} />
            {/* Queue */}
            <Route path='/queue' element={<Queue />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
