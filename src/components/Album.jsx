export default function Album({album}) {
  const {albumName, tracks} = album;

    return (
      <div className="Album">
        <h3 className="Album-title">{albumName}</h3>
        <ul>
          {tracks.map((track,i) => <li key={i}>{track}</li>)}
        </ul>
      </div>
    );
  }
  