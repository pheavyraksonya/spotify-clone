import { useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../../assets/assets";
import NavBar from "../../components/navBar";
import { useContext } from "react";
import { PlayerContext } from "../../context/playerContext";

type RouteParam = {
  id: string;
};

const AlbumPage = () => {
  const { playWidthId } = useContext(PlayerContext);
  const { id } = useParams<RouteParam>();
  const albumData = id ? albumsData[Number(id)] : null;
  console.log(albumData);
  return (
    <>
      <NavBar />
      <div className="flex gap-8 flex-col md:flex-row mt-10 md:items-end">
        <img className="rounded-lg w-48" src={albumData?.image} alt="" />
        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">
            {albumData?.name}
          </h2>
          <h4>{albumData?.desc}</h4>
          <p className="mt-1">
            <img
              className="inline-block w-5 "
              src={assets.spotify_logo}
              alt=""
            />
            <b> Spotify </b>• 1,323,154 likes • <b>50 songs,</b> about 2 hr 30
            mins
          </p>
        </div>
      </div>
      <div className="mt-10 mb-4 pl-2 text-gray-400 grid grid-cols-3 sm:grid-cols-4">
        <p>
          <b className="mr-4">#</b>Title
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img className="w-4 m-auto" src={assets.clock_icon} alt="" />
      </div>
      <hr />
      {songsData.map((i, id) => (
        <div
          onClick={() => playWidthId(i.id)}
          key={id}
          className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 text-gray-400 hover:bg-[#ffffff2b] cursor-pointer items-center"
        >
          <p className="text-white">
            <b className="mr-4 text-[#a7a7a7]">{id + 1}</b>
            <img className="mr-5 w-10 inline" src={i.image} alt="" />
            {i.name}
          </p>
          <p className="text-[15px] ">{albumData?.name}</p>
          <p className="text-[15px] hidden sm:block">5 days ago</p>
          <p className="text-[15px] text-center">{i.duration}</p>
        </div>
      ))}
    </>
  );
};

export default AlbumPage;
