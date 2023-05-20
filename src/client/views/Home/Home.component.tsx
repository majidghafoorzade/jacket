import { Link, useLoaderData } from "react-router-dom";

export const Home = () => {
  const data: any = useLoaderData();

  return (
    <div>
      <h1>Home page</h1>
      <ul>
        <li>{data.task.title}</li>
      </ul>
      <Link to="/about">About</Link>
    </div>
  );
};
