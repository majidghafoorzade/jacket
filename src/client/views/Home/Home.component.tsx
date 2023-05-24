import { Link, useLoaderData } from "react-router-dom";
import styles from "./Home.module.scss";

export const Home = () => {
  const data: any = useLoaderData();

  return (
    <div className={styles.Home}>
      <h1>Home page</h1>
      <ul>
        <li>{data.post.title.rendered}</li>
      </ul>
      <Link to="/about">About</Link>
    </div>
  );
};
