import type { Route } from "./+types/not-found";
import { NotFound } from "~/components/page/NotFound";
import { notFoundMeta } from "~/seo/meta";

export const meta: Route.MetaFunction = ({ location }) => notFoundMeta(location.pathname);

export default NotFound;
