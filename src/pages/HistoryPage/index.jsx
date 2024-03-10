import HistoryOrder from "components/HistoryOrder";
import SearchOrderForm from "components/SearchOrderForm";
import React from "react";
import { HistoryPageContainerStyle } from "./HistoryPage.styled";

function HistoryPage() {
  return (
    <HistoryPageContainerStyle className="container">
      <SearchOrderForm />
      <HistoryOrder />
    </HistoryPageContainerStyle>
  );
}

export default HistoryPage;
