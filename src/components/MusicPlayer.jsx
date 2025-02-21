import { useSelector } from "react-redux";

const MusicPlayer = () => {
  const selectedSong = useSelector((state) => state.music.selectedSong);

  if (!selectedSong) {
    return <div>Seleziona una canzone per vedere i dettagli qui</div>;
  }

  return (
    <div>
      <h3>Playing Now:</h3>
      <p>Track: {selectedSong.title_short}</p>
      <p>Artist: {selectedSong.artist.name}</p>
      <img src={selectedSong.album.cover_medium} alt="track" />
    </div>
  );
};

export default MusicPlayer;
