import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Sidebar from "./components/SideBar";
import MainSection from "./components/MainSection";
import Player from "./components/Player";
import AlbumCard from "./components/AlbumCard";
import MusicSection from "./components/MusicSection";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  return (
    <>
      <Sidebar />
      <MainSection />
      <Player />
      <AlbumCard />
      <MusicSection />
      <MusicPlayer />
    </>
  );
}

export default App;
