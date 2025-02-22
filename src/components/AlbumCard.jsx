/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { selectSong, toggleLike } from "../redux/store/actions/musicActions";
import { Button, Container } from "react-bootstrap";

const AlbumCard = ({ singleSong }) => {
  const dispatch = useDispatch();

  if (!singleSong || !singleSong.album || !singleSong.artist || !singleSong.title_short) {
    return null;
  }

  const handleSongClick = () => {
    dispatch(selectSong(singleSong));
  };

  const handleLikeClick = () => {
    dispatch(toggleLike(singleSong.id));
  };

  return (
    <Container>
      <div className="col text-center" onClick={handleSongClick}>
        <img className="img-fluid" src={singleSong.album.cover_medium} alt="track" />
        <p>
          Track: {singleSong.title_short}
          <br />
          Artist: {singleSong.artist.name}
        </p>
        <Button variant="success" onClick={handleLikeClick}>
          Like
        </Button>
      </div>
    </Container>
  );
};

export default AlbumCard;
