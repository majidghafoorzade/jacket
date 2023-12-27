import dotEnv from "dotenv";
import express, { Request, Response } from "express";
import compression from "compression";
import { renderApp } from "server/utils/renderApp";

// init dotenv
dotEnv.config();

// get env vars
const { PORT = 3000 } = process.env;

// Init Express server
const app = express();

// Enable gzip compression
app.use(compression());

// Config static files directories
app.use(express.static("public"));
app.use("/static", express.static("build/client"));

// Configure template engine
app.set("view engine", "hbs");
app.set("views", "./src/server/views");

// Configure application routes
app.get("/*", async (req: Request, res: Response) => {
  const { markup, scriptTags, styleTags, linkTags } = await renderApp(req);

  res.render("app.hbs", {
    markup,
    scriptTags,
    styleTags,
    linkTags,
  });
});

// Run Express server
app.listen(PORT, () => {
  console.log("server started at http://localhost:" + PORT);
});
