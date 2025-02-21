/* eslint-disable react/prop-types */
const AlbumCard = ({ singleSong }) => {
  if (!singleSong || !singleSong.album || !singleSong.artist) {
    return null; // Ritorna null se singleSong è undefined o mancano album e artist
  }

  return (
    <div className="col text-center">
      <img className="img-fluid" src={singleSong.album.cover_medium} alt="track" />
      <p>
        Track: {singleSong.title}
        <br />
        Artist: {singleSong.artist.name}
      </p>
    </div>
  );
};

export default AlbumCard;
