import { useContext } from "react";
import { PlayerContext } from "../../../context/playerContext";

interface SongItemsProps {
  name: string;
  image: string;
  desc: string;
  id: number;
}

const SongItems = (prp: SongItemsProps) => {
  const { name, image, desc, id } = prp;
  const { playWidthId } = useContext(PlayerContext);

  return (
    <div
      onClick={() => playWidthId(id)}
      className="min-w-45 p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
    >
      <img className="rounded" src={image} alt="" />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-gray-500 text-sm">{desc}</p>
    </div>
  );
};

export default SongItems;
