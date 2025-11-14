import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";

const WishListComponent = ({ id, from }: { id: number; from: string }) => {
  const [fav, setFav] = useState<number[]>([]);

  useEffect(() => {
    const Favorite = localStorage.getItem("favorite");
    if (Favorite) {
      setFav(JSON.parse(Favorite));
    }
  }, []);

  useEffect(() => {
    if (fav.length !== 0) {
      localStorage.setItem("favorite", JSON.stringify(fav));
    }
  }, [fav]);

  const Favorite = (id: number) => {
    setFav([...fav, id]);
  };

  const delFavorite = (id: number) => {
    let favorite = fav.filter((faID) => id !== faID);
    setFav(favorite);
    if (favorite.length === 0) {
      localStorage.removeItem("favorite");
    }
  };
  return (
    <div>
      {from === "ProductDetails" ? 
        fav.includes(id) ?
        <button onClick={() => delFavorite(id)} className="hover:text-white hover:bg-black duration-300 cursor-pointer py-2 px-8 rounded-lg border ">Remove from Wishlist</button>:<button onClick={() => Favorite(id)} className=" cursor-pointer hover:text-white hover:bg-black duration-300 py-2 px-8 rounded-lg border ">Add to Wishlist</button>
       : (
        <div className="absolute top-4 right-4 z-10">
          {fav.includes(id) ? (
            <FaHeart
              onClick={() => delFavorite(id)}
              className="cursor-pointer text-red-500 text-xl"
            />
          ) : (
            <FaRegHeart
              onClick={() => Favorite(id)}
              className="cursor-pointer text-gray-500 text-xl"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default WishListComponent;
