import Main from "./pages/Main";
import NotFound from "./pages/NotFound";

const routes = [
    { path: "/", component: <Main /> },
    { path: "*", component: <NotFound /> },
];

export default routes;
