import React from "react";
import {
  HistoryOrderItemStyle,
  HistoryOrderMedicineItemStyle,
  HistoryOrderMedicineListStyle,
  HistoryOrderTotalPriceStyle,
} from "./HistoryOrderItem.styled";
import defaultImg from "images/default.png";

function HistoryOrderItem({ item }) {
  return (
    <HistoryOrderItemStyle>
      <HistoryOrderMedicineListStyle>
        {item.orderList.medicine.map((e) => (
          <HistoryOrderMedicineItemStyle key={e._id}>
            <img src={e.img || defaultImg} alt={e.title} />
            <div>
              <h3>{e.title}</h3>
              <p>Price: {e.price}$</p>
            </div>
          </HistoryOrderMedicineItemStyle>
        ))}
      </HistoryOrderMedicineListStyle>
      <HistoryOrderTotalPriceStyle>
        TotalPrice: {item.orderList.totalPrice}$
      </HistoryOrderTotalPriceStyle>
    </HistoryOrderItemStyle>
  );
}

export default HistoryOrderItem;
