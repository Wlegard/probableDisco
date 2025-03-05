import React, { useState, useEffect } from 'react';
const axios = require('axios');

function Settings({ themes, setThemes, theme, setTheme}) {
  // create formValues state to keep track of formValues
  const [formValues, setFormValues] = useState({
    themeName: '',
    primaryColor: '',
    secondaryColor: '',
    tertiaryColor: '',
    cursor: '',
    font: '',
    borderRadius: 0,
    userId: 0,
  });

  useEffect(() => {
    // run getThemes to change the application's state's themes upon first render of the Settings component
    getThemes();
  }, []);

  useEffect(() => {
    // any time themes is altered, set the current theme to the first theme in themes (but only if the current theme is null and if the themes state have already been set)
    // aka, changes theme only upon the first time that themes is altered
    if (theme === null && themes.length !== 0) {
      setTheme(themes[0]);
    }
  }, [themes])

  // TESTING LOGGING
  useEffect(() => {
    console.log(theme, themes)
  }, [theme, themes])

  const getThemes = () => {
    // return the result (a promise) of sending a GET request to /settings on server to get an array of all themes in the db
    axios.get('/settings')
      .then(settings => {
        // set themes in App's state to be the returned settings data
        setThemes(settings.data);
      })
      .catch(err => {
        // handle errors
        console.error("Failed to get theme settings from database", err);
      });
  };
  const addTheme = () => {
    // send a POST request to /settings on the server to add a new theme to the db
    axios.post('/settings', formValues)
      .then(() => {
        // set themes in App's state to be the new list of themes in the db by calling getThemes
        getThemes();
      })
      .catch(err => {
        // handle errors
        console.error("Failed create new theme in database", err);
      });
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

  const updateFormValues = (key, value) => {
    setFormValues(currentValues => {
      // update the corresponding form value in Setting's form values state to be the inputted value from the forms
      currentValues[key] = value;
      // return the new state for Setting's form values
      return currentValues;
    });

    console.log(formValues);
  }

  return (
    <div id="settings">
      {/* <label htmlFor="themes">Theme Settings</label> */}
      <span style={{fontWeight:'bold'}}>Theme Loadouts</span>
      <select id="themes">
        {
          // themes.map((themeObj) => {
          //   return (
          //     <option key={themeObj.themeName + themeObj._id}>
          //     {themeObj.themeName}
          //     </option>
          //   )
          // })
        }
      </select>
      <button>Delete Theme</button>
      <div id="forms">
        {
          <div key="idk">
            <span style={{color:'darkgrey'}}>Theme Name</span>
            <input onChange={e => updateFormValues('themeName', e.target.value)} placeholder="insert the name of your theme"></input>
            <span style={{color:'darkgrey'}}>Primary Color</span>
            <input onChange={e => updateFormValues('primaryColor', e.target.value)} placeholder="insert primary color (can be name or hex value)"></input>
            <span style={{color:'darkgrey'}}>Secondary Color</span>
            <input onChange={e => updateFormValues('secondaryColor', e.target.value)} placeholder="insert secondary color (can be name or hex value)"></input>
            <span style={{color:'darkgrey'}}>Tertiary Color</span>
            <input onChange={e => updateFormValues('tertiaryColor', e.target.value)} placeholder="insert tertiary color (can be name or hex value)"></input>
            <span style={{color:'darkgrey'}}>Custom cursor image</span>
            <input onChange={e => updateFormValues('cursor', e.target.value)} placeholder="insert image link for you mouse cursor"></input>
            <span style={{color:'darkgrey'}}>Font</span>
            <input onChange={e => updateFormValues('font', e.target.value)} placeholder="insert name of desired font"></input>
            <span style={{color:'darkgrey'}}>Corner Rounding</span>
            <input onChange={e => updateFormValues('borderRadius', e.target.value)} placeholder="insert number (of pixels) you want to round the corners of boxes by" type="number"></input>
          </div>
        }
        <button onClick={addTheme}>Add Theme</button>
      </div>
    </div>
  )
};

export default Settings;