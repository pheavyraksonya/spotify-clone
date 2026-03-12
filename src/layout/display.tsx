import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "../pages/home/homePage";
import AlbumPage from "../pages/album/albumPage";
import { useEffect, useRef } from "react";
import { albumsData } from "../assets/assets";

const Display = () => {
  const displayRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.split("/")[2] : null;
  const bgColor = albumsData[Number(albumId)].bgColor;

  useEffect(() => {
    if (isAlbum) {
      displayRef.current!.style.background = `linear-gradient(${bgColor},#121212)`;
    } else {
      displayRef.current!.style.background = `#121212`;
    }
  }, [location]);

  return (
    <div
      ref={displayRef}
      className="w-full m-2 px-6 pt-4 rounded-lg bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0"
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/album/:id" element={<AlbumPage />} />
      </Routes>
    </div>
  );
};

export default Display;
