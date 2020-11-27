import React, { useState } from "react";
//import { Link } from "react-router-dom";
import styled from "styled-components";
import BurgerButton from "./BurgerButton";

export default function Navigation() {
  const [dropdown, setDropdown] = useState(false);

  //toogle dropdown
  const showDropdown = () => setDropdown(!dropdown);
  console.log(dropdown);

  return (
    <div>
      <BurgerButton isVisible={dropdown} onClick={showDropdown} />
      {dropdown && (
        <StyledNavigation>
          <ul>
            <li>Darkmode Toggle</li>
            <li>
              <span>Settings</span>
            </li>
            <li>Logout</li>
          </ul>
        </StyledNavigation>
      )}
    </div>
  );
}

const StyledNavigation = styled.nav`
  background-color: crimson;
  display: flex;
  justify-content: center;
  height: 50vh;
  width: 60vw;
  position: absolute;
  top: 80px;
  right: 0;

  ul {
    list-style-type: none;
  }
`;
