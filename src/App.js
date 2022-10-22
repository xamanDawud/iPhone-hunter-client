import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Phones from "./components/Phones";
import Phone from "./components/phone/Phone";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/phones",
          loader: () => {
            return fetch("http://localhost:5000/phones");
          },
          element: <Phones />,
        },
        {
          path: "/:id",
          loader: ({ params }) => {
            return fetch(`http://localhost:5000/phones/${params.id}`);
          },
          element: <Phone />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
