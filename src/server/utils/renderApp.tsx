import { renderToString } from "react-dom/server";
import { App } from "client/App";

export const renderApp = () => {
  const markup = renderToString(<App />);

  return { markup };
};
