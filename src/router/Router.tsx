import { MobileLayout } from "layout/MobileLayout";
import { Area } from "pages/area/Area";
import { Calendar } from "pages/calendar/Calendar";
import { Home } from "pages/home/Home";
import { Landing } from "pages/landing/Landing";
import { Setting } from "pages/setting/Setting";
import React from "react";
import { useRoutes } from "react-router-dom";

export const Router = () => {
  const routes = [
    {
      path: "/",
      element: <MobileLayout />,
      children: [{ path: "/", element: <Landing /> }],
    },
    {
      path: "/",
      element: <MobileLayout />,
      children: [{ path: "/home", element: <Home /> }],
    },
    {
      path: "/",
      element: <MobileLayout />,
      children: [{ path: "/calendar", element: <Calendar /> }],
    },
    {
      path: "/",
      element: <MobileLayout />,
      children: [{ path: "/area", element: <Area /> }],
    },
    {
      path: "/",
      element: <MobileLayout />,
      children: [{ path: "/setting", element: <Setting /> }],
    },
  ];

  return useRoutes(routes);
};
