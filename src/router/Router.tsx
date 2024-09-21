import { PAGE_URI } from "constants/pageUri";
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
      path: PAGE_URI.ROOT,
      element: <MobileLayout />,
      children: [{ path: PAGE_URI.LANDING, element: <LandingPage /> }],
    },
    {
      path: PAGE_URI.ROOT,
      element: <MobileLayout />,
      children: [{ path: PAGE_URI.HOME, element: <HomePage /> }],
    },
    {
      path: PAGE_URI.ROOT,
      element: <MobileLayout />,
      children: [{ path: PAGE_URI.CALENDAR, element: <CalendarPage /> }],
    },
    {
      path: PAGE_URI.ROOT,
      element: <MobileLayout />,
      children: [{ path: PAGE_URI.AREA, element: <AreaPage /> }],
    },
    {
      path: PAGE_URI.ROOT,
      element: <MobileLayout />,
      children: [{ path: PAGE_URI.SETTING, element: <SettingPage /> }],
    },
  ];

  return useRoutes(routes);
};
