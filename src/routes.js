import AppLayout from "./ui/AppLayout/AppLayout";
import Home from "./pages/Home/Home";
import LoginLayout from "./pages/Login/LoginLayout";
import PrivateRoute from "./utils/PrivateRoute";
import Products from "./features/Products/Products";
import Categories, {
  loader as categoriesLoader,
} from "./features/Categories/Categories";
import SalesPage from "./pages/SalesPage/SalesPage";
import PageNotFound from "./pages/PageNotFound.jsx";
import QRScanner from "./features/sales/QRScanner.jsx";
import Error from "./ui/Error";
import FilteredProducts from "./features/Products/FilteredProducts";
import { loader as ProductsLoader } from "./features/Products/FilteredProducts";
import NoInternetConnection from "./ui/NoInternetConnection.jsx";
import SettingsPage from "./pages/Settings/SettingsPage";
import { loader as usersLoader } from "./features/authentication/LoginForm.jsx";
import { loader as categoryLoader } from "./features/Products/Products";
import { loader as storeLoader } from "./pages/Home/Home";
const routes = [
  {
    name: "AppLayout",
    element: <AppLayout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
        loader: storeLoader,
        errorElement: <Error />,
      },
      {
        path: "/salesPage",
        element: <SalesPage />,
        auth: true,
        children: [
          {
            path: "categories",
            element: <Categories />,
            errorElement: <Error />,
            auth: true,
            loader: categoriesLoader,
          },
          {
            path: "categories/:id",
            element: <Products />,
            errorElement: <Error />,
            loader: categoryLoader,
            auth: true,
          },
          {
            path: "qrscanner",
            element: <QRScanner />,
            auth: true,
          },
          {
            path: "filtredProducts",
            element: <FilteredProducts />,
            errorElement: <Error />,
            auth: true,
            loader: ProductsLoader,
          },
        ],
      },
      {
        path: "/settings",
        element: <SettingsPage />,
      },
      {
        path: "/NoInternetConnection",
        element: <NoInternetConnection />,
      },
      {
        path: "/settings",
        element: <SettingsPage />,
      },
    ],
  },
  {
    name: "auth",
    path: "/auth",
    errorElement: <Error />,
    loader: usersLoader,
    element: <LoginLayout />,
  },

  {
    element: <PageNotFound />,
    path: "*",
  },
];

function RenderRoutes(routes) {
  return routes.map((route) => {
    if (route?.auth) {
      route.element = <PrivateRoute>{route.element}</PrivateRoute>;
    }
    if (route?.children) {
      route.children = RenderRoutes(route.children);
    }
    return route;
  });
}
export default RenderRoutes(routes);
