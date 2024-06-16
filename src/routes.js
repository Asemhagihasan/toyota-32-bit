import AppLayout from "./ui/AppLayout/AppLayout";
import Home from "./pages/Home/Home";
import LoginLayout from "./pages/Login/LoginLayout";
import PrivateRoute from "./utils/PrivateRoute";
import Products from "./features/Products/Products";
import Categories, {
  loader as categoriesLoader,
} from "./features/Categories/Categories";
import SalesPage from "./pages/SalesPage/SalesPage";
import QRScanner from "./features/sales/QRScanner.jsx";
import Error from "./ui/Error";
import FilteredProducts from "./features/Products/FilteredProducts";
import { loader as ProductsLoader } from "./features/Products/FilteredProducts";
import NoInternetConnection from "./ui/NoInternetConnection.jsx";
import SettingsPage from "./pages/Settings/SettingsPage.jsx";

const routes = [
  {
    name: "AppLayout",
    element: <AppLayout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
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
            auth: true,
          },
          {
            path: "qrscanner",
            element: <QRScanner />,
            auth: true,
          },
          {
            path: "allProducts",
            element: <FilteredProducts />,
            errorElement: <Error />,
            auth: true,
            loader: ProductsLoader,
          },
          {
            path: "favoritProducts",
            element: <FilteredProducts />,
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
    ],
  },
  {
    name: "auth",
    path: "/auth",
    element: <LoginLayout />,
  },
  // {
  //   element: <PageNotFoud />,
  //   path: "*",
  // },
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
