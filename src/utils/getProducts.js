import algoliasearch from "algoliasearch/lite";

const client = algoliasearch("8329NI8LQK", "983fd1f5f5b4e49eb2c0faebee7113c6");
const index = client.initIndex("ecommerce_products");

export const loadProducts = async (limit) => {
  const res = await index.search('', {
    hitsPerPage: limit,
    attributesToRetrieve: [
      'image_cover',
      'brand',
      'sku',
      'currency',
      'price_best',
      'features',
      'tech_file',
      'image_urls',
      'raw'
    ]
  });
  return res.hits
};

export const loadCount = async (brand) => {
  const res = await index.search('', {
    filters: `brand:${brand}`,
    attributesToRetrieve: [
      'image_cover'
    ]
  });
  return res.hits
}