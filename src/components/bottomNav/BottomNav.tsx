import React from "react";
import { BottomNavWrapper } from "./BottomNav.style";
import BottomNavJson from "./BottomNav.json";

export const BottomNav = () => {
  return (
    <BottomNavWrapper>
      {BottomNavJson.list
        .sort((a, b) => a.index - b.index)
        .map((menu) => (
          <div key={menu.id}>
            <img src={menu.iconUrl} alt={menu.iconAlt} />
          </div>
        ))}
    </BottomNavWrapper>
  );
};
