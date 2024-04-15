import Shop, {loader as fetchProductData} from "./Pages/Shop.jsx";
import Home from "./Pages/Home.jsx";
import Cart from "./Component/cart/Cart.jsx";
import Root from "./Pages/Root.jsx";
import Error from "./Component/UI/Error.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import FavoriteProduct from "./Pages/FavoriteProduct.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'shop',
          element: <Shop />,
          loader:fetchProductData,
        },
        {
          path: 'likedProduct',
          element: <FavoriteProduct />
        },
        {
          path: 'shoppingCart',
          element: <Cart />
        },
        {
          path: 'contact',
          element: <ContactUs />
        },
      ]
    }
  ])
  return <RouterProvider router={router} />

}