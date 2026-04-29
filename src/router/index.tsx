import { Suspense, lazy } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const MainLayout = lazy(() => import("@/layout/main-layout"));
const HomePage = lazy(() => import("@/pages/home-page"));
const LandingPage = lazy(() => import("@/pages/landing-page"));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        index
        element={
          <Suspense>
            <LandingPage />
          </Suspense>
        }
      />
      <Route
        path="build"
        element={
          <Suspense>
            <MainLayout />
          </Suspense>
        }
      >
        <Route
          index
          element={
            <Suspense>
              <HomePage />
            </Suspense>
          }
        />
      </Route>
      <Route path="*" element={<div>404 Page Not Found</div>} />
    </Route>,
  ),
);
