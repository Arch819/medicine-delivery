import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderStyle = styled.header`
  padding: 4px 0;

  @media screen and (max-width: 768px) {
    & .container {
      max-width: 100%;
      padding: 0 5px;
    }
  }
`;

export const NavigationStyle = styled.nav`
  & ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    @media screen and (min-width: 768px) {
      display: flex;
      justify-content: start;
    }
  }
  & li:not(:last-child) {
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 2px solid #000;
  }
`;

export const NavLinkStyle = styled(NavLink)({
  padding: "10px 20px",
  fontSize: "16px",
  fontWeight: 500,
  lineHeight: "1.1",

  color: "#11aeff",

  "&:not(:last-child)": {
    borderRight: "2px solid #000",
  },

  "&.active": {
    fontWeight: 600,
    textDecoration: "underline",
  },
  "&.mobile": {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    fontSize: "22px",
  },

  "@media screen and (min-width: 1440px)": {
    fontSize: "26px",
  },
});
