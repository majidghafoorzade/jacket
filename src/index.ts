import express from "express";
import { Request, Response } from "express";
import { renderApp } from "./server/utils/renderApp";

const { PORT = 3000 } = process.env;

// Init Express server
const app = express();

// Config static files directories
app.use(express.static("public"));
app.use("/static", express.static("build/static"));

// Configure template engine
app.set("view engine", "hbs");
app.set("views", "./src/server/views");

// Configure application routes
app.get("/*", (req: Request, res: Response) => {
  const { markup } = renderApp();

  res.render("app.hbs", {
    markup,
  });
});

// Run Express server
app.listen(PORT, () => {
  console.log("server started at http://localhost:" + PORT);
});
