import algoliasearch from "algoliasearch/lite";

const client = algoliasearch("N2BMFF9FQC", "a40f00c73cca354f32ceae2aadcf769e");
const index = client.initIndex("ecommerce_products");

export const loadProducts = async (limit) => {
  const res = await index.search('', {
    hitsPerPage: limit,
    attributesToRetrieve: [
      'image_cover',
      'sku_description',
      'brand',
      'sku',
      'currency',
      'sale_unit',
      'price_public',
      'features',
      'tech_file',
      'image_urls',
      'maker_web',
      'brand_favicon'
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