import React from "react";
import { BottomNavContainer, BottomNavWrapper } from "./BottomNav.style";
import BottomNavJson from "./BottomNav.json";
import { useLocation, useNavigate } from "react-router-dom";

export const BottomNav = () => {
  const nav = useNavigate();
  const location = useLocation();

  const navHandler = (url: string) => {
    nav(url);
  };
  return (
    <BottomNavWrapper>
      {BottomNavJson.list
        .sort((a, b) => a.index - b.index)
        .map((menu) => (
          <BottomNavContainer
            $isSelected={location.pathname.split("/")[1] === menu.navUrl}
            key={menu.id}
            onClick={(e) => {
              e.preventDefault();
              navHandler(menu.navUrl);
            }}
          >
            <div></div>
            <div>
              <img
                src={
                  location.pathname.split("/")[1] === menu.navUrl
                    ? menu.selectedIconUrl
                    : menu.iconUrl
                }
                alt={menu.iconAlt}
              />
              <div>{menu.name}</div>
            </div>
          </BottomNavContainer>
        ))}
    </BottomNavWrapper>
  );
};
