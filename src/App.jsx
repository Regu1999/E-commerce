import { QueryClientProvider } from "@tanstack/react-query";
import Root from "./Pages/Root.jsx";
import Error from "./Component/UI/Error.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import { queryClient } from "./https.js";
import store from './store/index.js';
import { Provider } from "react-redux";
import LoadingCard from "./Component/UI/LoadingCard.jsx";
const Home = lazy(() => import('./Pages/Home.jsx'));
const Cart = lazy(() => import('./Component/cart/Cart.jsx'));
const ContactUs = lazy(() => import('./Pages/ContactUs.jsx'));
const FavoriteProduct = lazy(() => import('./Pages/FavoriteProduct.jsx'));
const Shop = lazy(() => import('./Pages/Shop.jsx'));
const Login = lazy(() => import('./Pages/UserAuth.jsx'));
const Profile = lazy(() => import('./Pages/Profile.jsx'));


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
        loader: (data) => import('./Pages/Shop.jsx').then(module => module.loader(data)),
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
        element: <SuspenseContainer> <Login /></SuspenseContainer>,
      },
      {
        path: 'profile',
        element: <SuspenseContainer><Profile /></SuspenseContainer>,
        loader: () => import('./Pages/Profile.jsx').then(module => module.loader())
      },
      {
        path: 'logout',
        loader: () => import('./Pages/Logout.jsx').then(module => module.logoutFn())
      }
    ]
  }
])
export default function App() {
  return <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </QueryClientProvider>

}