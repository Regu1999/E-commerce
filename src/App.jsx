import Root from "./Pages/Root.jsx";
import Error from "./Component/UI/Error.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./Component/UI/Loader.jsx";

const Home = lazy(() => import('./Pages/Home.jsx'));
const Cart = lazy(() => import('./Component/cart/Cart.jsx'));
const ContactUs = lazy(() => import('./Pages/ContactUs.jsx'));
const FavoriteProduct = lazy(() => import('./Pages/FavoriteProduct.jsx'));
const Shop = lazy(() => import('./Pages/Shop.jsx'));
const Login = lazy(() => import('./Pages/UserAuth.jsx'))

const loadingArrays = new Array(10).fill(0);
const LoadingCard = () => {
  return <div className="flex flex-wrap justify-center animate-fade-in mb-10">
    {loadingArrays.map((loadingArray, index) => {
      return <Loader key={index} />
    })}
  </div>
}
const SuspenseContainer = ({ children }) => {
  return <Suspense fallback={<LoadingCard />}>{children}</Suspense>
}
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <SuspenseContainer><Home /></SuspenseContainer>
      },
      {
        path: 'shop',
        element: <SuspenseContainer> <Shop /> </SuspenseContainer>,
        loader: () => import('./Pages/Shop.jsx').then(method => method.loader()),
      },
      {
        path: 'likedProduct',
        element: <SuspenseContainer> <FavoriteProduct /></SuspenseContainer>,
      },
      {
        path: 'shoppingCart',
        element: <SuspenseContainer><Cart /></SuspenseContainer>,
      },
      {
        path: 'contact',
        element: <SuspenseContainer> <ContactUs /></SuspenseContainer>,
      },
      {
        path: 'auth',
        element:<SuspenseContainer> <Login /></SuspenseContainer>,
      }
    ]
  }
])
export default function App() {
  return <RouterProvider router={router} />

}