import Album from "./Album";

export default function AlbumList({albums}) {

  // let {albums} = props;
  console.log(albums);
  return (
    <div>
      <h3>Album List</h3>
      {albums.map(album => <Album data={album}/> )}
    </div>
  );
}
