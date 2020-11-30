import React, { useState } from "react";
import styled from "styled-components";
import QuickButton from "./QuickButton";
import QuickMenu from "./QuickMenu";

export default function AppFooter() {
  const [uploadMenu, setUploadMenu] = useState(false);
  const [lfgMenu, setLfgMenu] = useState(false);
  const [friendsMenu, setFriendsMenu] = useState(false);

  function toggleUploadMenu() {
    setUploadMenu(!uploadMenu);
    setFriendsMenu(false);
    setLfgMenu(false);
  }

  function toggleLfgMenu() {
    setLfgMenu(!lfgMenu);
    setUploadMenu(false);
    setFriendsMenu(false);
  }

  function toggleFriendsMenu() {
    setFriendsMenu(!friendsMenu);
    setUploadMenu(false);
    setLfgMenu(false);
  }

  return (
    <Footer>
      {uploadMenu && (
        <QuickMenu direction={"upload"} color={"var(--upload-red)"} />
      )}
      <QuickButton
        color={"var(--upload-red)"}
        direction={"upload"}
        onClick={toggleUploadMenu}
        isActive={uploadMenu}
      />
      {lfgMenu && <QuickMenu direction={"lfg"} color={"var(--lfg-cyan)"} />}
      <QuickButton
        color={"var(--lfg-cyan)"}
        direction={"lfg"}
        onClick={toggleLfgMenu}
        isActive={lfgMenu}
      />
      {friendsMenu && (
        <QuickMenu direction={"friends"} color={"var(--friendlist-blue)"} />
      )}
      <QuickButton
        color={"var(--friendlist-blue)"}
        direction={"friends"}
        onClick={toggleFriendsMenu}
        isActive={friendsMenu}
      />
    </Footer>
  );
}

const Footer = styled.footer`
  background-color: #f2f2f2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 10vw;
  margin-right: 10vw;
  height: 70px;
  width: 80vw;
  box-shadow: inset 0 0 4px black;
  border-radius: 35px;
  position: absolute;
  bottom: 10px;

  h1,
  h2 {
    margin: 0px;
  }
`;
