import React, { Suspense } from "react";
import { MantineColorScheme, MantineProvider } from "@mantine/core";
import { Route, Routes } from "react-router-dom";
import { themesEnum } from "./utils/constants";
import "@mantine/core/styles.css";

const Layout = React.lazy(() => import("../shared/Layout"));
const TodoPage = React.lazy(() => import("../pages/TodoPage"));

export const MainRoutes = () => {
  return (
    <MantineProvider
      defaultColorScheme={themesEnum.DARCK as MantineColorScheme}
    >
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              width: "100%",
              height: "100%",
            }}
          >
            Ресурсы приложения грузятся...
          </div>
        }
      >
        <Routes>
          {/* Главный лейаут */}
          <Route path="/todo/" element={<Layout />}>
            <Route index element={<TodoPage />} />
          </Route>
        </Routes>
      </Suspense>
    </MantineProvider>
  );
};
