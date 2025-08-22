import { useState } from "react";

export default function Album({album}) {
  const {title, songs} = album;

    const [showAlbum, setShowAlbum] = useState(true)
    return (
      <div className="Album">
        <h3 className="Album-title">{title}</h3>
        {showAlbum && (
        <ul>
          {songs.map((song, i)=> (<li key={i}>{song.title}</li>))}
        </ul>
        )}
        <button onClick={() => setShowAlbum(!showAlbum)}>visa/dölj</button>
      </div>
    );
  }
  