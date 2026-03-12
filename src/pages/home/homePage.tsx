import NavBar from "../../components/navBar";
import { albumsData } from "../../assets/assets";
import AlbumItems from "./components/albumItems";
import SongItems from "./components/songItems";
import { songsData } from "../../assets/assets";
const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((i, id) => (
            <AlbumItems
              name={i.name}
              image={i.image}
              desc={i.desc}
              key={id}
              id={i.id}
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today's biggest hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((i, id) => (
            <SongItems
              name={i.name}
              image={i.image}
              desc={i.desc}
              key={id}
              id={i.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
