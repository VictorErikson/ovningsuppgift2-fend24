import { useState } from 'react';
import './App.css'
import AlbumList from "./components/AlbumList";

function App() {
   const [darkMode, setDarkMode] = useState(true);
   const [albums, setAlbums] = useState([
  {
    albumName: "Midnight Vibes",
    tracks: ["Starry Night", "City Lights", "Dreamscape"]
  },
  {
    albumName: "Summer Days",
    tracks: ["Ocean Breeze", "Golden Hour", "Endless Road"]
  },
  {
    albumName: "Winter Tales",
    tracks: ["Snowfall", "Frozen Lake", "Silent Night"]
  }
])

  return (
    <div className={darkMode ? "App" : "App light-mode"}>
      <button onClick={() => {
        console.log(darkMode);
        setDarkMode(!darkMode)
      }
      
      }>Change mode</button>
      <h1>My albums</h1>
      <AlbumList albums={albums} />
    </div>
  );
}

export default App