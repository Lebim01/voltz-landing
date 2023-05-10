import algoliasearch from "algoliasearch/lite";

const client = algoliasearch("8329NI8LQK", "983fd1f5f5b4e49eb2c0faebee7113c6");
const index = client.initIndex("ecommerce_products");

export const loadProducts = async (limit) => {
  const res = await index.search('', {
    hitsPerPage: limit
  });
  return res.hits
};

export const loadCount = async (brand) => {
  const res = await index.search('', {
    filters: `brand:${brand}`
  });
  return res.hits
}