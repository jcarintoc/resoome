import { Suspense, lazy } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import PageLoader from "@/components/ui/page-loader";

const MainLayout = lazy(() => import("@/layout/main-layout"));
const HomePage = lazy(() => import("@/pages/home-page"));
const LandingPage = lazy(() => import("@/pages/landing-page"));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        index
        element={
          <Suspense fallback={<PageLoader />}>
            <LandingPage />
          </Suspense>
        }
      />
      <Route
        path="build"
        element={
          <Suspense fallback={<PageLoader />}>
            <MainLayout />
          </Suspense>
        }
      >
        <Route
          index
          element={
            <Suspense fallback={<PageLoader />}>
              <HomePage />
            </Suspense>
          }
        />
      </Route>
      <Route path="*" element={<div>404 Page Not Found</div>} />
    </Route>
  )
);
