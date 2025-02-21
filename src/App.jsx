import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Sidebar from "./components/SideBar";
import MainSection from "./components/MainSection";
import Player from "./components/Player";

function App() {
  return (
    <>
      <Sidebar />
      <MainSection />
      <Player />
    </>
  );
}

export default App;
