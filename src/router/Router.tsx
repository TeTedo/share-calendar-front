import { PAGE_URI } from "constants/pageUri";
import { EmptyMobileLayout } from "layout/EmptyMobileLayout";
import { MobileLayout } from "layout/MobileLayout";
import { CalendarPage } from "pages/calendar/CalendarPage";
import { ErrorPage } from "pages/error/ErrorPage";
import { NotFoundPage } from "pages/error/NotFoundPage";
import { HomePage } from "pages/home/HomePage";
import { LandingPage } from "pages/landing/LandingPage";
import { GroupPage } from "pages/group/GroupPage";
import { Login } from "pages/login/Login";
import { SettingPage } from "pages/setting/SettingPage";
import React from "react";
import { useRoutes } from "react-router-dom";
import { GroupManagePage } from "pages/group/GroupManagePage";
import { Invite } from "pages/Invite/Invite";

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
      children: [{ path: PAGE_URI.GROUP, element: <GroupPage /> }],
    },
    {
      path: PAGE_URI.ROOT,
      element: <MobileLayout />,
      children: [{ path: PAGE_URI.GROUP_MANAGE, element: <GroupManagePage /> }],
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

    {
      path: PAGE_URI.ROOT,
      element: <EmptyMobileLayout />,
      children: [{ path: PAGE_URI.INVITATION, element: <Invite /> }],
    },
  ];

  return useRoutes(routes);
};
