import { CiHeart } from "react-icons/ci";
import { IoIosHeart } from "react-icons/io";

import {
  MedicineFavoriteBtnStyle,
  MedicineImgBoxStyle,
  MedicineInfoBoxStyle,
  MedicineItemBtnStyle,
  MedicineItemStyle,
  MedicineItemTitleStyle,
} from "./MedicineItem.styled";
import defaultImg from "../../images/default.png";
import { useDispatch, useSelector } from "react-redux";
import { addMedicine } from "store/Cart/cartSlice";
import { useState } from "react";
import {
  addToFavorite,
  removeFromFavorite,
} from "store/Favorite/favoriteSlice";
import { selectFavoriteList } from "store/Favorite/favoriteSelector";
import { isInclude } from "utils/isInclude";

function MedicineItem({ data }) {
  const dispatch = useDispatch();
  const favoriteList = useSelector(selectFavoriteList);

  const [isFavorite, setIsFavorite] = useState(
    isInclude(favoriteList, "_id", data._id).isExist
  );

  const handleClick = () => {
    dispatch(addMedicine({ ...data, quantity: 1 }));
  };

  const addFavorite = () => {
    setIsFavorite(true);
    dispatch(addToFavorite(data));
  };
  const removeFavorite = () => {
    setIsFavorite(false);
    dispatch(removeFromFavorite(data));
  };

  return (
    <MedicineItemStyle>
      <MedicineImgBoxStyle>
        <img src={data.img || defaultImg} alt={data.title} />
      </MedicineImgBoxStyle>
      <MedicineInfoBoxStyle>
        {isFavorite ? (
          <MedicineFavoriteBtnStyle onClick={removeFavorite}>
            <IoIosHeart color="#11aeff" />
          </MedicineFavoriteBtnStyle>
        ) : (
          <MedicineFavoriteBtnStyle onClick={addFavorite}>
            <CiHeart />
          </MedicineFavoriteBtnStyle>
        )}
        <MedicineItemTitleStyle>{data.title}</MedicineItemTitleStyle>
        <MedicineItemBtnStyle
          type="button"
          className="btn"
          onClick={handleClick}
        >
          Add to Cart
        </MedicineItemBtnStyle>
      </MedicineInfoBoxStyle>
    </MedicineItemStyle>
  );
}

export default MedicineItem;
