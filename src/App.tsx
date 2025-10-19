import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Rate from "./pages/Rate";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Rate />
      </>
    ),
  },
  {
    path: "/service",
    element: (
      <>
        <Header />
      </>
    ),
  },
  {
    path: "/instruction",
    element: (
      <>
        <Header />
      </>
    ),
  },
  {
    path: "/stages",
    element: (
      <>
        <Header />
      </>
    ),
  },
  {
    path: "/guarantees",
    element: (
      <>
        <Header />
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
