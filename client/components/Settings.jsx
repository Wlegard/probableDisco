import React, { useState, useEffect } from 'react';

function Settings(props) {
  //const [something, setSomething] = useState(0);
  return (
    <div id="settings">
      <label for="themes">
        <span style="font-weight:bold">Theme Loadouts</span>
        <select id="themes">
          {
            <div key="idk">
              <option key="idk">Example Theme</option>
              <button>Delete Theme</button>
            </div>
          }
        </select>
        <div id="forms">
          {
            <div key="idk">
              <span style="color:darkgrey">Primary Color</span>
              <input onChange={e => console.log(e.target.value)} placeholder="insert primary color (can be name or hex value)"></input>
            </div>
          }
          <button>Add Theme</button>
        </div>
      </label>
    </div>
  )
};

export default Settings;