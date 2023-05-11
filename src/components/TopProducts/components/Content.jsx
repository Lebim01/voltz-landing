import { useEffect, useState } from "preact/hooks";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import NotFound from "./NotFound";

import { loadProducts } from "@/utils/getProducts";
import Button from "@/components/common/Button";
import Collapsable from "@/components/common/Collapsable";
import { formatNumberWithCommas } from "@/utils/number";

const RenderProduct = ({ prod }) => {
  const [opened, setOpened] = useState(false);
  const [image, setImage] = useState(prod.image_cover)

  return (
    <div className="bg-white rounded-[6px] pt-[24px] flex flex-col space-y-[18px] w-full w-auto-custom box-border">
      <div className="flex space-x-[8px] px-[16px] box-border">
        <img
          src={image}
          onError={function() {
            setImage('/assets/no-image.png')
          }}
          className="h-[120px] w-[120px] object-fit"
          alt="product-cover"
          loading="lazy"
        />
        <div className="flex-1 flex flex-col space-y-[8px]">
          <div className="flex flex-col">
            <div className="flex space-x-[4px] items-center">
              {prod.brand_favicon && <img src={prod.brand_favicon} height={17} width={16} />}
              <span className="text-text-secondary font-semibold text-base">
                {prod.brand}
              </span>
            </div>
            <span className="text-text-secondary text-sm">{prod.sku}</span>
          </div>
          <span className="text-text-secondary text-base">
            $ {formatNumberWithCommas(prod.price_public, 2)} {prod.sale_unit}
          </span>
          <a href="https://app.voltz.mx/#/login-view">
            <Button className="bg-primary hover:bg-primary-dark text-white px-[24px] py-[10px] font-semibold text-sm w-min whitespace-nowrap">
              MEJORAR PRECIO
            </Button>
          </a>
        </div>
      </div>
      <div className="w-full px-[16px] box-border">
        <p className="m-[0px] text-base text-text-secondary w-full">
          {prod.sku_description}
        </p>
      </div>
      <div className="w-full border-[0px] border-t border-b border-solid border-border-1 box-border">
        <Collapsable
          title="Detalles del producto"
          icon="/assets/info-icon.svg"
          className={
            "px-[16px] py-[16px] text-base font-semibold active:bg-border-1 hover:cursor-pointer select-none rounded-b-[6px]"
          }
          opened={opened}
          onToggle={() => {
            setOpened((s) => !s);
          }}
        />
        {opened && (
          <div className="flex flex-col space-y-[17px] bg-[#F6F7F8] px-[16px] py-[20px] rounded-b-[6px]">
            {prod?.tech_file && (
              <div className="flex justify-between items-center section-border pb-[16px]">
                <span className="font-medium text-base text-text-secondary">
                  Ficha técnica
                </span>
                <a
                  href={prod.tech_file}
                  target="_blank"
                  download="ficha_tecnica"
                >
                  <Button className="border border-solid border-text-secondary text-text-secondary px-[16px] py-[4px] font-semibold text-base">
                    Descargar
                  </Button>
                </a>
              </div>
            )}

            {prod?.image_urls && prod?.image_urls.length > 0 && (
              <>
                <div className="flex section-border pb-[16px]">
                  <span className="font-medium text-base text-text-secondary">
                    Galería del producto
                  </span>
                </div>

                <div className="flex flex-col section-border pb-[16px]">
                  <Swiper
                    pagination={true}
                    modules={[Pagination]}
                    className="h-[350px]"
                  >
                    {prod.image_urls.map((url, index) => (
                      <SwiperSlide key={`url-${index}`}>
                        <img src={url} alt="gallery image" loading="lazy" className="w-full h-full block" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </>
            )}

            {Array.isArray(prod.features) ? prod.features.length > 0 : Boolean(prod.features) && (
              <div className="flex flex-col space-y-[16px] section-border pb-[16px]">
                <span className="font-medium text-base text-text-secondary">
                  Especificaciones
                </span>
                <span className="text-text-secondary text-sm">
                  {prod.features}
                </span>
              </div>
            )}

            {prod.maker_web && (
              <div className="flex justify-between items-center section-border pb-[16px]">
                <span className="font-medium text-base text-text-secondary">
                  Web del fabricante
                </span>
                <a href={prod.maker_web} target="_blank">
                  <Button className="border border-solid border-text-secondary text-text-secondary px-[16px] py-[4px] font-semibold text-base">
                    Visitar
                  </Button>
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const ContentProducts = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts(5).then(setProducts).then(props?.onLoad);
  }, []);

  if (products.length == 0) {
    return <div className="bg-border-1 px-[21px] py-[16px]">Loading...</div>;
  }

  return (
    <div className="bg-border-1 px-[16px] py-[16px] lg:py-[64px] pb-[40px]">
      <div className="desktop-container flex flex-col flex-wrap space-y-[16px] md:hidden">
        {products.map((prod) => (
          <RenderProduct prod={prod} />
        ))}

        <NotFound />
      </div>

      <div className="desktop-container">
        {/** 2 columns */}
        <div className="grid-cols-2 gap-x-[20px] hidden md:grid xl:hidden py-[16px] lg:px-[80px]">
          <div className="flex flex-col space-y-[16px] overflow-hidden h-full">
            <RenderProduct prod={products[0]} />
            <RenderProduct prod={products[1]} />
            <RenderProduct prod={products[2]} />
          </div>

          <div className="flex flex-col space-y-[16px] overflow-hidden h-full">
            <RenderProduct prod={products[3]} />
            <RenderProduct prod={products[4]} />
            <NotFound />
          </div>
        </div>
        {/** 3 columns */}
        <div className="grid-cols-3 gap-x-[20px] hidden xl:grid py-[16px] px-[80px]">
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
