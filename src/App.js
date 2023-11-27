import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'

import "./css/home.css";

import Home from "./pages/Home";
import Root from "./components/Root";
import Shop from "./pages/Shop";
import ProductDetails from "./components/ProductDetails";
import Checkout from "./components/Checkout";
import store from "./store/store";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      // errorElement: <ErrorElement/>,
      children: [
        { path: "", element: <Home /> },
        { path: "shop", element: <Shop /> },
        { path: "shop/:id", element: <ProductDetails /> },
        { path: "checkout", element: <Checkout /> },
      ],
    },
  ]);

  return (
    <Provider store={store} >
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
