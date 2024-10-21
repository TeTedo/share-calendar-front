import React from "react";
import { S_BottomNavContainer, S_BottomNavWrapper } from "./BottomNav.style";
import BottomNavJson from "./BottomNav.json";
import { useLocation, useNavigate } from "react-router-dom";

export const BottomNav = () => {
  const nav = useNavigate();
  const location = useLocation();

  const navHandler = (url: string) => {
    nav(url);
  };
  return (
    <S_BottomNavWrapper>
      {BottomNavJson.list
        .sort((a, b) => a.index - b.index)
        .map((menu) => (
          <S_BottomNavContainer
            key={menu.id}
            onClick={(e) => {
              e.preventDefault();
              navHandler(menu.navUrl);
            }}
          >
            <img
              src={
                location.pathname.split("/")[1] === menu.navUrl
                  ? menu.selectedIconUrl
                  : menu.iconUrl
              }
              alt={menu.iconAlt}
            />
          </S_BottomNavContainer>
        ))}
    </S_BottomNavWrapper>
  );
};
