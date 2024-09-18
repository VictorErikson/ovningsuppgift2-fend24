import { useState } from "react";

export default function Album({data}) {

  let [show, setShow] = useState(false);

  let {name,tracks} = data;

  return (
      <div>
        {/* Alternativ 1 */}
        {/* {show ? <h2>Nu ser du mig!</h2> : <h2>Nu är state = false</h2>} */}
        {/* Alternativ 2 */}
        {/* {show && <h2>Nu ser du mig!</h2>} */}

        <h3>{name} <button onClick={() => {setShow(!show)}}>{!show ? "Show" : "Hide"}</button></h3>
        {show && <ul>
          {tracks.map((track,i) => <li key={i}>{track}</li>)}
        </ul>}
      </div>
    );
  }
  