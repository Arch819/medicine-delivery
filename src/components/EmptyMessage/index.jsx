import React from "react";
import { EmptyMessageStyle, MessageStyle } from "./EmptyMessage.styled";

function EmptyMessage({ something = "" }) {
  return (
    <EmptyMessageStyle>
      <MessageStyle>{something}</MessageStyle>
    </EmptyMessageStyle>
  );
}

export default EmptyMessage;
