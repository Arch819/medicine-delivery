import {
  CustomerInfoFormStyle,
  CustomerInfoStyle,
  FormLabelStyle,
} from "./CustomerInfo.styled";

function CustomerInfo({ userInfo, setUserInfo }) {
  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <CustomerInfoStyle>
      <CustomerInfoFormStyle>
        <FormLabelStyle>
          <input
            type="text"
            name="name"
            value={userInfo.name}
            onChange={handleChange}
            placeholder=" "
            required
          />
          <span>Name*</span>
        </FormLabelStyle>

        <FormLabelStyle>
          <input
            type="email"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
            placeholder=" "
            required
          />
          <span>Email*</span>
        </FormLabelStyle>

        <FormLabelStyle>
          <input
            type="text"
            name="phone"
            value={userInfo.phone}
            onChange={handleChange}
            placeholder=" "
            required
          />
          <span>Phone*</span>
        </FormLabelStyle>

        <FormLabelStyle>
          <input
            type="text"
            name="address"
            value={userInfo.address}
            onChange={handleChange}
            placeholder=" "
            required
          />
          <span>Address*</span>
        </FormLabelStyle>
      </CustomerInfoFormStyle>
    </CustomerInfoStyle>
  );
}

export default CustomerInfo;
