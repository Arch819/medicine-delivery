import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getOrderByCustomerThunk,
  getOrderByIdThunk,
} from "store/History/historyThunk";
import { notiflixMessage } from "utils/notiflixMessages";
import { object, string } from "yup";
import {
  SearchFormLabelStyle,
  SearchOrderBtnListStyle,
  SearchOrderFormStyle,
  SearchOrderSubmitBtnStyle,
  SearchOrderWrappStyle,
  VariantFormBtnStyle,
} from "./SearchOrderForm.styled";

const initialValues = {
  email: "",
  phone: "",
  orderId: "",
};

const validationSchema = object().shape({
  email: string("Enter your email").trim(),
  phone: string("Enter your phone").trim(),
  orderId: string("Enter order id").trim(),
});

function SearchOrderForm() {
  const [variantSearch, setVariantSearch] = useState(1);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      if (variantSearch === 1) {
        delete values.orderId;
        dispatch(getOrderByCustomerThunk(values)).then(({ payload, error }) => {
          if (error) {
            return;
          }
          if (!payload.length) {
            return notiflixMessage("info", "Nothing Found");
          }
          notiflixMessage("ok", `Found ${payload.length} orders`);
          resetForm();
        });
      }
      if (variantSearch === 2) {
        delete values.email;
        delete values.phone;
        dispatch(getOrderByIdThunk(values.orderId)).then(
          ({ payload, error }) => {
            if (error) {
              return;
            }
            if (!payload.length) {
              return notiflixMessage("info", "Nothing Found");
            }
            notiflixMessage("ok", `Found ${payload.length} orders`);
            resetForm();
          }
        );
      }
    },
  });
  return (
    <SearchOrderWrappStyle>
      <SearchOrderBtnListStyle>
        <li>
          <VariantFormBtnStyle
            type="button"
            className="btn"
            onClick={() => setVariantSearch(1)}
            $active={variantSearch === 1}
          >
            By customer
          </VariantFormBtnStyle>
        </li>
        <li>
          <VariantFormBtnStyle
            type="button"
            className="btn"
            onClick={() => setVariantSearch(2)}
            $active={variantSearch === 2}
          >
            Bu order id
          </VariantFormBtnStyle>
        </li>
      </SearchOrderBtnListStyle>
      <SearchOrderFormStyle onSubmit={formik.handleSubmit}>
        {variantSearch === 1 ? (
          <>
            <SearchFormLabelStyle>
              <input
                type="text"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder=" "
                required
              />
              <span>Email</span>
            </SearchFormLabelStyle>
            <SearchFormLabelStyle>
              <input
                type="text"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                placeholder=" "
                required
              />
              <span>Phone</span>
            </SearchFormLabelStyle>
          </>
        ) : (
          <SearchFormLabelStyle>
            <input
              type="text"
              name="orderId"
              value={formik.values.orderId}
              onChange={formik.handleChange}
              placeholder=" "
              required
            />
            <span>Order id</span>
          </SearchFormLabelStyle>
        )}
        <SearchOrderSubmitBtnStyle type="submit" className="btn-submit">
          Search
        </SearchOrderSubmitBtnStyle>
      </SearchOrderFormStyle>
    </SearchOrderWrappStyle>
  );
}

export default SearchOrderForm;
