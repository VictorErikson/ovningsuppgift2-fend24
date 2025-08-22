import Album from "./Album";

export default function AlbumList({albums}) {
  return (
    <div>
      <h3>Album List</h3>
        {albums.map((album, i) => <Album key={i} album={album}/>)}
      </div>
  );
}
