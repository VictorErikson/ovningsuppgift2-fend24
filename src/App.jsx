import './App.css'
import AlbumList from "./components/AlbumList";
function App() {
  const albums = [
  {
    title: "Random Access Memories",
    artist: "Daft Punk",
    year: 2013,
    songs: [
      { title: "Give Life Back to Music", duration: "4:35" },
      { title: "Instant Crush", duration: "5:37" },
      { title: "Get Lucky", duration: "6:09" }
    ]
  },
  {
    title: "Back in Black",
    artist: "AC/DC",
    year: 1980,
    songs: [
      { title: "Hells Bells", duration: "5:12" },
      { title: "Shoot to Thrill", duration: "5:17" },
      { title: "Back in Black", duration: "4:15" }
    ]
  },
  {
    title: "21",
    artist: "Adele",
    year: 2011,
    songs: [
      { title: "Rolling in the Deep", duration: "3:48" },
      { title: "Someone Like You", duration: "4:45" },
      { title: "Set Fire to the Rain", duration: "4:02" }
    ]
  }
];



  return (
    <div className="App">
      <h1>My albums</h1>
      <AlbumList albums={albums}/>
    </div>
  );
}

export default App