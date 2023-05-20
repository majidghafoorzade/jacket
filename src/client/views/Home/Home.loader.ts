import axios from "axios";
import { json } from "react-router-dom";

export const loader = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
  return json({ task: res.data[0] });
};
