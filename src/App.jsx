import Shop from "./Pages/Shop.jsx";
import Home from "./Pages/Home.jsx";
import Cart from "./Component/cart/Cart.jsx";
import Root from "./Pages/Root.jsx";
import Error from "./Component/UI/Error.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <Error />,
      children: [{
        index: true,
        element: <Home />
      },
      {
        path: '/shop',
        element: <Shop />,
      },
      {
        path: '/contact',
        element: <ContactUs />
      },
      {
        path: '/shoppingCart',
        element: <Cart />
      }
      ]
    }
  ])
  return <RouterProvider router={router} />

}
// <div>
//   <NavBar />
//   {/* <Cart /> */}
//   {/* <Home /> */}
//   <Shop />
// </div>