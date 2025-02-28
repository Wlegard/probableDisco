import React, { useState, useEffect } from 'react';

function Settings(props) {
  //const [something, setSomething] = useState(0);
  return (
    <div id="settings">
      <label for="themes">
        <span style="font-weight:bold">Theme Loadouts</span>
        <select id="themes">
          {
            <option key="idk">insert </option>
          }
        </select>
        <div id="forms">
          {
            <div key="idk">
              <input onChange={e => console.log(e.target.value)} placeholder="insert primary color (can be name or hex value)"></input>
              <button>Delete Theme</button>
            </div>
          }
          <button>Add Theme</button>
        </div>
      </label>
    </div>
  )
};

export default Settings;