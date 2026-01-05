import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import MainLayout from "@/layout/main-layout";
import HomePage from "@/pages/home-page";
import LandingPage from "@/pages/landing-page";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<LandingPage />} />
      <Route path="build" element={<MainLayout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="*" element={<div>404 Page Not Found</div>} />
    </Route>
  )
);
