import AppLayout from "./ui/AppLayout/AppLayout";
import Home from "./ui/Home/Home";
import LoginLayout from "./pages/Login/LoginLayout";
import PrivateRoute from "./utils/PrivateRoute";
import Products from "./features/Products/Products";
import Categories, {
  loader as categoriesLoader,
} from "./features/Categories/Categories";
import SalesPage from "./pages/SalesPage/SalesPage";
import QRScanner from "./features/sales/QRScanner.jsx";
import Error from "./ui/Error";
import ProductsWithNoBarcode from "./features/Products/ProductsWithNoBarcode.jsx";

const routes = [
  {
    name: "AppLayout",
    element: <AppLayout />,
    errorElement: <Error />,
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
            path: "productsWithNoBarcode",
            element: <ProductsWithNoBarcode />,
            auth: true,
          },
        ],
      },
    ],
  },
  {
    name: "auth",
    path: "/auth",
    element: <LoginLayout />,
    // action: loginAction,
    // loader: fetchUsers,
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
