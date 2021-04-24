import Home, { fetchHomeData } from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Product from "./Pages/Product";

export default [
  {
    path: "/",
    component: Home,
    exact: true,
    loadData: fetchHomeData,
  },
  {
    path: "/product/:productSlug",
    component: Product,
  },
  {
    path: "*",
    component: (): React.ReactElement => <NotFound />,
  },
];
