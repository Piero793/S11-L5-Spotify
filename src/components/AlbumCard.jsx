/* eslint-disable react/prop-types */
const AlbumCard = ({ singleSong }) => {
  if (!singleSong || !singleSong.album || !singleSong.artist || !singleSong.title_short) {
    return null;
  }

  return (
    <div className="col text-center">
      <img className="img-fluid" src={singleSong.album.cover_medium} alt="track" />
      <p>
        Track: {singleSong.title_short}
        <br />
        Artist: {singleSong.artist.name}
      </p>
    </div>
  );
};

export default AlbumCard;
