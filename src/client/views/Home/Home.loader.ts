import axios from "axios";
import { json } from "react-router-dom";

export const loader = async () => {
  const res = await axios.get(
    "https://learning.emofid.com/wp-json/wp/v2/posts/27341"
  );
  return json({ post: res.data });
};
