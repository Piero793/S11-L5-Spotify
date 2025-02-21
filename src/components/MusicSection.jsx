import { useEffect, useState } from "react";
import AlbumCard from "./AlbumCard";

const MusicSection = ({ artistName, sectionId }) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`);
        if (response.ok) {
          let { data } = await response.json();
          setSongs(data.slice(0, 4));
        } else {
          throw new Error("Error in fetching songs");
        }
      } catch (err) {
        console.log("error", err);
      }
    };
    fetchSongs();
  }, [artistName]);

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id={sectionId}>
      {songs.map((song) => (
        <AlbumCard key={song.id} singleSong={song} />
      ))}
    </div>
  );
};

export default MusicSection;
