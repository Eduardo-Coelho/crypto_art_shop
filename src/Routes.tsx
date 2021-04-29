import Gallery from "./Pages/Gallery";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Product from "./Pages/Product";

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
