import { useEffect, useState } from "preact/hooks";
import { loadProducts } from "@/utils/getProducts";
import NotFound from "./NotFound";
import Button from "@/components/common/Button";

const RenderProduct = ({ prod }) => (
  <div className="bg-white rounded-[6px] px-[16px] py-[24px] flex flex-col space-y-[18px] w-full w-auto-custom box-border">
    <div className="flex space-x-[8px]">
      <img
        src={prod.image_cover}
        className="h-[120px] w-[120px] object-fit"
        alt="product-cover"
        loading="lazy"
      />
      <div className="flex-1 flex flex-col space-y-[8px]">
        <div className="flex flex-col">
          <span className="text-text-secondary font-semibold text-base">
            {prod.brand}
          </span>
          <span className="text-text-secondary text-sm">
            {prod.sku}
          </span>
        </div>
        <span className="text-text-secondary text-base">
          $ {prod.price_best}
        </span>
        <a href="https://app.voltz.mx/#/login-view">
          <Button className="bg-primary hover:bg-primary-dark text-white px-[24px] py-[10px] font-semibold text-sm">
            MEJORAR PRECIO
          </Button>
        </a>
      </div>
    </div>
    <div className="w-full">
      <p className="m-[0px] text-base text-text-secondary w-full">
        {prod.features}
      </p>
    </div>
  </div>
)

const ContentProducts = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts(5).then(setProducts).then(props?.onLoad);
  }, []);

  if(products.length == 0) {
    return (
      <div className="bg-border-1 px-[21px] py-[16px]">
        Loading...
      </div>
    )
  }

  return (
    <div className="bg-border-1 px-[21px] py-[16px] lg:py-[64px] pb-[40px]">
      <div className="desktop-container flex flex-col flex-wrap space-y-[16px] lg:hidden">
        {products.map((prod) => (
          <RenderProduct prod={prod} />
        ))}

        <NotFound />
      </div>

      <div className="desktop-container">
        <div className="grid-cols-3 gap-x-[32px] hidden lg:grid px-[80px]">
          <div className="flex flex-col space-y-[16px] overflow-hidden h-full">
            <RenderProduct prod={products[0]} />
            <RenderProduct prod={products[1]} />
          </div>

          <div className="flex flex-col space-y-[16px] overflow-hidden h-full">
            <RenderProduct prod={products[2]} />
            <RenderProduct prod={products[3]} />
          </div>

          <div className="flex flex-col space-y-[16px] overflow-hidden h-full">
            <RenderProduct prod={products[4]} />
            <NotFound />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentProducts;
