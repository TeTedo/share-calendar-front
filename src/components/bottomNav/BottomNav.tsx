import React from "react";
import { S_BottomNavWrapper } from "./BottomNav.style";
import BottomNavJson from "./BottomNav.json";
import { useNavigate } from "react-router-dom";

export const BottomNav = () => {
  const nav = useNavigate();

  const navHandler = (url: string) => {
    nav(url);
  };
  return (
    <S_BottomNavWrapper>
      {BottomNavJson.list
        .sort((a, b) => a.index - b.index)
        .map((menu) => (
          <div
            key={menu.id}
            onClick={(e) => {
              e.preventDefault();
              navHandler(menu.navUrl);
            }}
          >
            <img src={menu.iconUrl} alt={menu.iconAlt} />
          </div>
        ))}
    </S_BottomNavWrapper>
  );
};
