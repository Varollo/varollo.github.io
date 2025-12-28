import { createBrowserRouter } from "react-router-dom";
import App from "../components/_App/App";
import HomePage from "../Pages/HomePage/HomePage";
import AboutPage from "../Pages/AboutPage/AboutPage";
import GamesPage from "../Pages/GamesPage/GamesPage";
import ProjectsPage from "../Pages/ProjectsPage/ProjectsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "games", element: <GamesPage /> },
      { path: "projects", element: <ProjectsPage /> },
    ]
  }
])