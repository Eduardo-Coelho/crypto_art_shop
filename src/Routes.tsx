import Gallery from "./pages/gallery";
import Home from "./pages/home";
import NotFound from "./pages/not-found";
import Product from "./pages/product";

export default [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/product/:productSlug",
    component: Product,
  },
  {
    path: "/gallery",
    component: Gallery,
  },
  {
    path: "*",
    component: (): React.ReactElement => <NotFound />,
  },
];
