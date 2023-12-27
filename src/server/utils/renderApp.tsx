import path from "path";
import { Request } from "express";
import { renderToString } from "react-dom/server";
import {
  StaticRouterProvider,
  createStaticHandler,
  createStaticRouter,
} from "react-router-dom/server";
import { ChunkExtractor } from "@loadable/server";
import { routes } from "client/config/router/routes";
import { createFetchRequest } from "client/config/router/request";

export const renderApp = async (req: Request) => {
  const prjBase = process.cwd();
  const extractor = new ChunkExtractor({
    // entrypoints: ["main"],
    // publicPath: "/assets/",
    statsFile: path.resolve(prjBase, "build/server/loadable-stats.json"),
  });

  const handler = createStaticHandler(routes);
  const fetchRequest = createFetchRequest(req);
  const context: any = await handler.query(fetchRequest);

  const router = createStaticRouter(handler.dataRoutes, context);

  const jsx = extractor.collectChunks(
    <StaticRouterProvider router={router} context={context} />
  );

  const markup = renderToString(jsx);
  const scriptTags = extractor.getScriptTags();

  return { markup, scriptTags };
};
