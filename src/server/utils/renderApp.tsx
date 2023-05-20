import { Request } from "express";
import { renderToString } from "react-dom/server";
import {
  StaticRouterProvider,
  createStaticHandler,
  createStaticRouter,
} from "react-router-dom/server";
import { routes } from "client/config/router/routes";
import { createFetchRequest } from "client/config/router/request";

export const renderApp = async (req: Request) => {
  const handler = createStaticHandler(routes);
  const fetchRequest = createFetchRequest(req);
  const context: any = await handler.query(fetchRequest);

  const router = createStaticRouter(handler.dataRoutes, context);

  const markup = renderToString(
    <StaticRouterProvider router={router} context={context} />
  );

  return { markup };
};
