import { Confirm, Notify } from "notiflix";
const statusArray = {
  OK: "ok",
  INFO: "info",
  REJECT: "error",
};

const confirmArray = {
  ORDER: "order",
};

const confirm = {
  order: ["Order", "Are you sure you want to place an order?"],
};

Confirm.init({
  zindex: 9000,
  backgroundColor: "#fff",
  backOverlayColor: "rgba(0,0,0,0.7)",
  borderRadius: "12px",
  cssAnimationStyle: "zoom",
  titleColor: "#000",
  fontFamily: "Manrope",
  okButtonBackground: "#3CBF61",
  cancelButtonBackground: "#ff0000",
});
Notify.init({
  borderRadius: "12px",
  clickToClose: true,
  zindex: 9000,
  fontFamily: "Roboto",
  fontSize: "16px",
  cssAnimationStyle: "from-right",
  fontAwesomeIconSize: "28px",
  success: {
    background: "#3CBF61",
    textColor: "#EFEDE8",
  },
  failure: {
    background: "#E9101D",
    textColor: "#EFEDE8",
  },
  info: {
    textColor: "#EFEDE8",
  },
});

export const notiflixMessage = (status, message) => {
  switch (status) {
    case statusArray.OK:
      return Notify.success(message);
    case statusArray.INFO:
      return Notify.info(message);
    case statusArray.REJECT:
      return Notify.failure(message);
    default:
      break;
  }
};
export const notiflixConfirm = (event) => {
  return new Promise((resolve, reject) => {
    switch (event) {
      case confirmArray.ORDER:
        return Confirm.show(
          confirm.order[0],
          confirm.order[1],
          "Yes",
          "No",
          () => {
            resolve();
          },
          () => {
            reject();
          }
        );
      default:
        break;
    }
  });
};
