import React, { useEffect, useState } from "react";
import { GiShop } from "react-icons/gi";
import { FaCartShopping } from "react-icons/fa6";
import { GrHistory } from "react-icons/gr";
import { BiSolidDiscount } from "react-icons/bi";

import { HeaderStyle, NavLinkStyle, NavigationStyle } from "./Header.styled";

function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 767);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 767);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <HeaderStyle className="header">
      <div className="container">
        <NavigationStyle>
          {isMobile ? (
            <ul className="mobile">
              <li>
                <NavLinkStyle to="/" className="mobile">
                  <GiShop />
                </NavLinkStyle>
              </li>
              <li>
                <NavLinkStyle to="/cart" className="mobile">
                  <FaCartShopping />
                </NavLinkStyle>
              </li>
              <li>
                <NavLinkStyle to="/history" className="mobile">
                  <GrHistory />
                </NavLinkStyle>
              </li>
              <li>
                <NavLinkStyle to="/coupons" className="mobile">
                  <BiSolidDiscount />
                </NavLinkStyle>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <NavLinkStyle to="/">Shop</NavLinkStyle>
              </li>
              <li>
                <NavLinkStyle to="/cart">Shopping cart</NavLinkStyle>
              </li>
              <li>
                <NavLinkStyle to="/history">History</NavLinkStyle>
              </li>
              <li>
                <NavLinkStyle to="/coupons">Coupons</NavLinkStyle>
              </li>
            </ul>
          )}
        </NavigationStyle>
      </div>
    </HeaderStyle>
  );
}

export default Header;
