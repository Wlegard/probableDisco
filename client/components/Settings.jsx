import React, { useState, useEffect } from 'react';
const axios = require('axios');

function Settings({ themes, setThemes, theme, setTheme}) {
  //const [something, setSomething] = useState(0);

  useEffect(() => {
    // run getThemes and then setTheme to change the application's current theme upon first render of the Settings component
    getThemes()
      .then(() => {
        console.log("DOES THIS WORK???");
        setTheme(themes[0]);
      })
      .catch(err => {
        console.error(err);
      })
  }, []);

  const getThemes = () => {
    // send get request to /settings on server
    return axios.get('/settings')
      .then(settings => {
        // set themes in App's state to be the returned settings
        setThemes(settings);
      })
      .catch(err => {
        // handle errors
        console.error("Failed to get theme settings from database", err);
      });
  };
  const addTheme = () => {
    axios.post('/settings');
  };
  const deleteTheme = () => {
    axios.delete('/settings');
  };
  const updateTheme = () => {
    axios.patch('/settings');
  };
  // const setCurrentTheme = (selectedTheme) => {
  //   // set the theme in App's state to be the theme you want the application to currently be using
  //   setTheme(selectedTheme);
  // }


  return (
    <div id="settings">
      <label for="themes">
        <span style={{fontWeight:'bold'}}>Theme Loadouts</span>
        <select id="themes">
          {
            <div key="idk">
              <option key="idk">Example Theme</option>
              <button>Delete Theme</button>
              <button>Use Theme</button>
            </div>
          }
        </select>
        <div id="forms">
          {
            <div key="idk">
              <span style={{color:'darkgrey'}}>Theme Name</span>
              <input onChange={e => console.log(e.target.value)} placeholder="insert the name of your theme"></input>
              <span style={{color:'darkgrey'}}>Primary Color</span>
              <input onChange={e => console.log(e.target.value)} placeholder="insert primary color (can be name or hex value)"></input>
              <span style={{color:'darkgrey'}}>Secondary Color</span>
              <input onChange={e => console.log(e.target.value)} placeholder="insert secondary color (can be name or hex value)"></input>
              <span style={{color:'darkgrey'}}>Tertiary Color</span>
              <input onChange={e => console.log(e.target.value)} placeholder="insert tertiary color (can be name or hex value)"></input>
              <span style={{color:'darkgrey'}}>Custom cursor image</span>
              <input onChange={e => console.log(e.target.value)} placeholder="insert image link for you mouse cursor"></input>
              <span style={{color:'darkgrey'}}>Font</span>
              <input onChange={e => console.log(e.target.value)} placeholder="insert name of desired font"></input>
              <span style={{color:'darkgrey'}}>Corner Rounding</span>
              <input onChange={e => console.log(e.target.value)} placeholder="insert number (of pixels) you want to round the corners of boxes by"></input>
            </div>
          }
          <button>Add Theme</button>
        </div>
      </label>
    </div>
  )
};

export default Settings;