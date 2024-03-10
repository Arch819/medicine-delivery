import EmptyMessage from "components/EmptyMessage";
import HistoryOrderItem from "components/HistoryOrderItem";
import React from "react";
import { useSelector } from "react-redux";
import { selectOrders } from "store/History/historySelector";
import { HistoryOrderListStyle } from "./HistoryOrder.styled";

function HistoryOrder() {
  const historyOrders = useSelector(selectOrders);
  return (
    <>
      {historyOrders.length ? (
        <HistoryOrderListStyle>
          {historyOrders.map((item) => (
            <HistoryOrderItem key={item._id} item={item} />
          ))}
        </HistoryOrderListStyle>
      ) : (
        <EmptyMessage something="History is empty" />
      )}
    </>
  );
}

export default HistoryOrder;
