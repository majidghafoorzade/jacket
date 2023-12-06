import { LRUCache } from "lru-cache";
import { json } from "react-router-dom";

interface WithCacheOptions {
  key: string;
  ttl?: number;
}

const cache = new LRUCache({
  max: 300,
  maxSize: 500000,
  sizeCalculation: (key: string, value: string) => {
    return key.length + value.length;
  },
});

export const withCache = (
  callback: any,
  { key, ttl = 1000 * 60 * 60 }: WithCacheOptions
) => {
  return async () => {
    // if data exists in cache
    if (cache.get(key)) {
      const data = JSON.parse(cache.get(key));
      return json(data);
    }

    const result: Promise<Response> = await callback();
    cache.set(key, JSON.stringify(result), { ttl });

    return json(result);
  };
};
