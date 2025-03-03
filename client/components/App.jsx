import React, { useState, useEffect } from "react";
import Settings from "./Settings.jsx";
import Search from "./Search.jsx";
import Avatar from "./Avatar.jsx";
import img from "../images/slimewire.png"
const axios = require("axios");

function App() {
  const [themes, setThemes] = useState([]);
  const [theme, setTheme] = useState({});
  const [avatars, setAvatars] = useState([]);
  const [currentImage, setCurrentImage] = useState("https://img.freepik.com/premium-vector/cute-green-slime-monster-illustration_799627-169.jpg");

  const searchDeezer = (query) => {
    axios
      .get(`https://api.deezer.com/search?q=${query}`)
      .then((data) => {
        console.log("successfully queried deezer", data[0]);
        return data;
      })
      .catch((err) => {
        console.error("deezer query failed", err);
      });
  };

  return (
    <div>
        <img src={img}/>
      <nav className="main-nav">Slime Wire</nav>
      <div className="main-content">
        <Search handleSearch={searchDeezer} />
        <Avatar avatars={avatars} 
                setAvatars={setAvatars}
                currentImage={currentImage}
                setCurrentImage={setCurrentImage}/>
        <Settings />
      </div>
    </div>
  );
}

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   componentDidMount() {}

//   searchDeezer(query) {
//     axios
//       .get(`https://api.deezer.com/search?q=${query}`)
//       .then(data => {
//         console.log('successfully queried deezer', data[0]);
//         return data;
//       })
//       .catch(err => {
//         console.error('deezer query failed', err);
//       });
//   }

//   render() {
//     return (
//       <div>
//         <nav className='main-nav'>Slime Wire</nav>
//         <div className='main-content'>
//           <Search handleSearch={this.searchDeezer} />
//         </div>
//       </div>
//     );
//   }
// }

export default App;
