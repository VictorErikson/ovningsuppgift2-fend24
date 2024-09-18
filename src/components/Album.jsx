import { useState } from "react";

export default function Album({data}) {

  // Vi sätter ett state som heter show. Vi får bara ändra på vårt state med setShow-funktionen.
  // Default värdet blir false.
  let [show, setShow] = useState(false);

  let {name,tracks} = data;

  return (
      <div>
        <h3>{name}
          {/* Vi använder setShow(!show) för att toggla värdet true/false i vår onClick*/}
          {/* Vi använder även Ternary operators dvs ? : för att anpassa texten baserat på state */}
          <button onClick={() => {setShow(!show)}}>{!show ? "Show" : "Hide"}</button>
        </h3>
      {/* Vi använder && för att säga: Om show är true, returnera <ul> */}
        {show && <ul>
          {tracks.map((track,i) => <li key={i}>{track}</li>)}
        </ul>}
      </div>
    );
  }
  