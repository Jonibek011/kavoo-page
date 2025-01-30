import { createBrowserRouter, RouterProvider } from "react-router";
import MainRoot from "./MainRoot";
import EngHome from "./pages/EngHome";
import FrenchHome from "./pages/FrenchHome";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainRoot />,
      children: [
        {
          index: true,
          element: <EngHome />,
        },
        {
          path: "/french",
          element: <FrenchHome />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
