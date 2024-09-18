export default function Album({data}) {

  let {name,tracks} = data;

    return (
      <div>
        <h3>{name} <button>Hide</button></h3>
        <ul>
          {tracks.map((track,i) => <li key={i}>{track}</li>)}
        </ul>
      </div>
    );
  }
  