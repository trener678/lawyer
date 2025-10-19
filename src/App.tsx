import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Header from "./components/Header";

const router = createBrowserRouter([
  {
    path: "/",
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
