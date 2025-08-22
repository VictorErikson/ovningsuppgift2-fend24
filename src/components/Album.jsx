import { useState } from "react";

export default function Album({album}) {

  const [show, setShow] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const {albumName, tracks} = album;


    return (
      <div className="Album">
        <h3 className="Album-title" onClick={() => {
        setShow(!show);
      }}>{albumName}</h3>

        {show && <ul>
          {tracks.map((track,i) => <li key={i}>{track}</li>)}
        </ul>}



      </div>
    );
  }
  