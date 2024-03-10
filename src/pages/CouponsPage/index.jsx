import CouponItem from "components/CouponItem";
import EmptyMessage from "components/EmptyMessage";
import { useDispatch, useSelector } from "react-redux";
import { CouponListStyle } from "./CouponPage.styled";
import { selectCoupons } from "store/Coupons/couponsSelector";
import { getAllCouponsThunk } from "store/Coupons/couponsThunk";
import { useEffect } from "react";

function CouponsPage() {
  const coupons = useSelector(selectCoupons);
  const dispatch = useDispatch();

  useEffect(() => {
    !coupons.length && dispatch(getAllCouponsThunk());
  }, [coupons.length, dispatch]);

  return (
    <div className="container">
      {coupons.length ? (
        <CouponListStyle>
          {coupons.map((coupon) => (
            <CouponItem key={coupon._id} coupon={coupon} />
          ))}
        </CouponListStyle>
      ) : (
        <EmptyMessage something="Coupons Not Found" />
      )}
    </div>
  );
}

export default CouponsPage;
