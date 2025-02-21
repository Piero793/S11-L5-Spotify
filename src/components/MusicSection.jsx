/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongs } from "../redux/store/actions/musicActions";
import AlbumCard from "./AlbumCard";

const MusicSection = ({ artistName, sectionId }) => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.music.songs);
  const status = useSelector((state) => state.music.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchSongs(artistName));
    }
  }, [artistName, dispatch, status]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error fetching songs</div>;
  }

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id={sectionId}>
      {songs.map((song, index) =>
        song && song.album && song.artist && song.title_short ? (
          <AlbumCard key={song.id} singleSong={song} />
        ) : (
          (console.log(`Invalid song at index ${index}:`, song), null)
        )
      )}
    </div>
  );
};

export default MusicSection;
