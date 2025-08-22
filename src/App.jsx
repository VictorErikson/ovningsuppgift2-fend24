import './App.css'
import AlbumList from "./components/AlbumList";

function App() {
  const myAlbums = [
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
];


  return (
    <div className="App">
      <h1>My albums</h1>
      <AlbumList albums={myAlbums} />
    </div>
  );
}

export default App