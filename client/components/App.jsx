import React, { useState, useEffect } from "react";

import Settings from "./Settings.jsx";

function App() {
  const [themes, setThemes] = useState([]);
  const [theme, setTheme] = useState({});
  const [avatars, setAvatars] = useState([]);
  const [currentImage, setCurrentImage] = useState("");

  return (
    <div>
      placeholder
      <Settings />
    </div>
  );
}

// this.state = {

//         avatarImages: [],
//         currentImage: ''
//     };
//     this.stateChanger = this.stateChanger.bind(this);
//   }

//   componentDidMount() {}

// stateChanger(stateName, dataToInsert){
//     this.setState({
//         [stateName]: dataToInsert
//     })
// }

//   render() {
// return <div>placeholder</div>;
// }
//}

export default App;
