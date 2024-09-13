import { MobileLayout } from "layout/MobileLayout";
import { AreaPage } from "pages/area/AreaPage";
import { CalendarPage } from "pages/calendar/CalendarPage";
import { HomePage } from "pages/home/HomePage";
import { LandingPage } from "pages/landing/LandingPage";
import { SettingPage } from "pages/setting/SettingPage";
import React from "react";
import { useRoutes } from "react-router-dom";

export const Router = () => {
  const routes = [
    {
      path: "/",
      element: <MobileLayout />,
      children: [{ path: "/", element: <LandingPage /> }],
    },
    {
      path: "/",
      element: <MobileLayout />,
      children: [{ path: "/home", element: <HomePage /> }],
    },
    {
      path: "/",
      element: <MobileLayout />,
      children: [{ path: "/calendar", element: <CalendarPage /> }],
    },
    {
      path: "/",
      element: <MobileLayout />,
      children: [{ path: "/area", element: <AreaPage /> }],
    },
    {
      path: "/",
      element: <MobileLayout />,
      children: [{ path: "/setting", element: <SettingPage /> }],
    },
  ];

  return useRoutes(routes);
};
