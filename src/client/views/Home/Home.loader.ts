import axios from "axios";
import { withCache } from "client/providers";

export const loader = withCache(
  async () => {
    const res = await axios.get(
      "https://learning.emofid.com/wp-json/wp/v2/posts/27341"
    );
    return { post: res.data };
  },
  {
    key: "home_data",
    ttl: 30000,
  }
);
