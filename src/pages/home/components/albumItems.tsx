import { useNavigate } from "react-router-dom";
interface AlbumItemsProps {
  name: string;
  image: string;
  desc: string;
  id: number;
}

const albumItems = (prp: AlbumItemsProps) => {
  const { name, image, desc, id } = prp;
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/album/${id}`)}
      className="min-w-45 p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
    >
      <img className="rounded" src={image} alt="" />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-gray-500 text-sm">{desc}</p>
    </div>
  );
};

export default albumItems;
