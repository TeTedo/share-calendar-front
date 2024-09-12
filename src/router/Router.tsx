import { MobileLayout } from "layout/MobileLayout";
import { Main } from "pages/Main";
import React from "react";
import { useRoutes } from "react-router-dom";

export const Router = () => {
  const routes = [
    {
      path: "/",
      element: <MobileLayout />,
      children: [{ path: "/", element: <Main /> }],
    },
  ];

  return useRoutes(routes);
};
