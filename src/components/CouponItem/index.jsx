import { notiflixMessage } from "utils/notiflixMessages";
import defaultImg from "../../images/default.png";
import {
  CouponItemBtnStyle,
  CouponItemStyle,
  CouponItemTitleStyle,
} from "./CouponItem.styled";

function CouponItem({ coupon }) {
  const copyToClipboard = () => {
    const codeToCopy = coupon.code;
    if (!codeToCopy) {
      return notiflixMessage(
        "error",
        "Oops, something went wrong, please try again later"
      );
    }
    navigator.clipboard
      .writeText(codeToCopy)
      .then(() => {
        notiflixMessage("info", "coupon code is copied to the clipboard");
      })
      .catch((err) => {
        notiflixMessage(
          "error",
          "Oops, something went wrong, please try again later"
        );
      });
  };
  return (
    <CouponItemStyle>
      <img src={coupon.img || defaultImg} alt={coupon.title} />
      <div>
        <CouponItemTitleStyle>{coupon.title}</CouponItemTitleStyle>
        <p>{coupon.code}</p>
        <CouponItemBtnStyle className="btn" onClick={copyToClipboard}>
          Copy
        </CouponItemBtnStyle>
      </div>
    </CouponItemStyle>
  );
}

export default CouponItem;
