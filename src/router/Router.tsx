import { PAGE_URI } from "constants/pageUri";
import { EmptyMobileLayout } from "layout/EmptyMobileLayout";
import { MobileLayout } from "layout/MobileLayout";
import { CalendarPage } from "pages/calendar/CalendarPage";
import { ErrorPage } from "pages/error/ErrorPage";
import { NotFoundPage } from "pages/error/NotFoundPage";
import { HomePage } from "pages/home/HomePage";
import { LandingPage } from "pages/landing/LandingPage";
import { ListPage } from "pages/list/ListPage";
import { Login } from "pages/login/Login";
import { SettingPage } from "pages/setting/SettingPage";
import React from "react";
import { useRoutes } from "react-router-dom";

export const Router = () => {
  const routes = [
    {
      path: PAGE_URI.ROOT,
      element: <EmptyMobileLayout />,
      children: [{ path: PAGE_URI.NOT_FOUND, element: <NotFoundPage /> }],
    },
    {
      path: PAGE_URI.ROOT,
      element: <EmptyMobileLayout />,
      children: [{ path: PAGE_URI.ERROR, element: <ErrorPage /> }],
    },
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
      children: [{ path: PAGE_URI.LIST, element: <ListPage /> }],
    },
    {
      path: PAGE_URI.ROOT,
      element: <MobileLayout />,
      children: [{ path: PAGE_URI.SETTING, element: <SettingPage /> }],
    },

    {
      path: PAGE_URI.ROOT,
      element: <EmptyMobileLayout />,
      children: [{ path: PAGE_URI.LOGIN, element: <Login /> }],
    },
  ];

  return useRoutes(routes);
};
