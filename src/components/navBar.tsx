import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img
            onClick={() => navigate(-1)}
            className="bg-black p-2 rounded-2xl cursor-pointer w-8"
            src={assets.arrow_left}
            alt=""
          />
          <img
            onClick={() => navigate(+1)}
            className="bg-black p-2 rounded-2xl cursor-pointer w-8"
            src={assets.arrow_right}
            alt=""
          />
        </div>
        <div className="flex items-center gap-4">
          <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer md:block hidden text-[15px]">
            Explore Premium
          </p>
          <p className="bg-black py-1 px-4 rounded-2xl text-white cursor-pointer hidden md:block text-[15px] ">
            Install App
          </p>
          <p className="bg-pink-500 w-7 h-7 rounded-full flex justify-center text-black items-center">
            N
          </p>
        </div>
      </div>
      <div className="flex items-center mt-4 gap-2">
        <p className="bg-white text-black px-4 py-1 cursor-pointer rounded-2xl">
          All
        </p>
        <p className="bg-black text-white px-4 py-1 cursor-pointer rounded-2xl">
          Music
        </p>
        <p className="bg-black text-white px-4 py-1 cursor-pointer rounded-2xl">
          Podcasts
        </p>
      </div>
    </>
  );
};

export default NavBar;
