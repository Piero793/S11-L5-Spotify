/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import AlbumCard from "./AlbumCard";

const MusicSection = ({ artistName, sectionId }) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`);
        if (response.ok) {
          const { data } = await response.json();
          console.log("DATI:", data);
          setSongs(data.slice(0, 4));
        } else {
          throw new Error("Errore nella fetch");
        }
      } catch (err) {
        console.log("error", err);
      }
    };
    fetchSongs();
  }, [artistName]);

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id={sectionId}>
      {songs.map((song, index) => {
        return song && song.album && song.artist && song.title ? (
          <AlbumCard key={song.id} singleSong={song} />
        ) : (
          (console.log(`Invalid song at index ${index}:`, song), null)
        );
      })}
    </div>
  );
};

export default MusicSection;
