import './App.css'
import AlbumList from "./components/AlbumList";

function App() {
  const myAlbums = [{
    name:"Stoney1",
    tracks:["420", "Kites", "Bluey"]
  },{
    name:"Stoney2",
    tracks:["420", "Kites", "Bluey"]
  },{
    name:"Stoney3",
    tracks:["420", "Kites", "Bluey"]
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