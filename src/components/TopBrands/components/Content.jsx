import { loadCount } from "@/utils/getProducts";
import { useEffect, useState } from "preact/hooks";

const BRANDS = [
  {
    tag: "Tecnolite",
    image: "/assets/brands/tecnolite.png",
  },
  {
    tag: "CONDUMEX",
    image: "/assets/brands/condumex.webp",
  },
  {
    tag: "IGOTO",
    image: "/assets/brands/igoto.webp",
  },
];

const RenderContent = ({ prod, products }) => {
  return (
    <div className="bg-white rounded-[6px] flex flex-col justify-between items-center space-y-[34px] box-border h-full w-full py-[24px]">
      <div className="flex-1 w-3/5 flex justify-center items-center">
        <img src={prod.image} className="w-3/5" alt="brand image" />
      </div>
      <div className="flex space-x-[-16px]">
        <img
          className="h-[56px] w-[56px] rounded-full border border-solid border-border-1"
          src={products[0]?.image_cover}
          alt="product-1"
        />
        <img
          className="h-[56px] w-[56px] rounded-full border border-solid border-border-1"
          src={products[1]?.image_cover}
          alt="product-2"
        />
        <img
          className="h-[56px] w-[56px] rounded-full border border-solid border-border-1"
          src={products[2]?.image_cover}
          alt="product-3"
        />
        <img
          className="h-[56px] w-[56px] rounded-full border border-solid border-border-1"
          src={products[3]?.image_cover}
          alt="product-4"
        />
        <img
          className="h-[56px] w-[56px] rounded-full border border-solid border-border-1"
          src={products[4]?.image_cover}
          alt="product-5"
        />
        {products?.length - 5 > 0 && (
          <span className="h-[56px] rounded-full bg-text-primary text-white text-lg flex items-center px-[16px] border border-solid border-border-1">
            {products?.length - 5}
          </span>
        )}
      </div>
    </div>
  );
};

const ContentProducts = (props) => {
  const [tecnolite, setTecnoLite] = useState([]);
  const [condumex, setCondumex] = useState([]);
  const [igoto, setIgoto] = useState([]);

  const loadAll = async () => {
    await loadCount(BRANDS[0].tag).then(setTecnoLite);
    await loadCount(BRANDS[1].tag).then(setCondumex);
    await loadCount(BRANDS[2].tag).then(setIgoto);
    props.onLoad()
  }

  useEffect(() => {
    loadAll()
  }, []);

  return (
    <div className="bg-border-1 px-[16px] py-[16px] lg:py-[64px]">
      <div className="desktop-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-[16px] lg:gap-x-[20px] lg:px-[80px]">
          <RenderContent prod={BRANDS[0]} products={tecnolite} />
          <RenderContent prod={BRANDS[1]} products={condumex} />
          <RenderContent prod={BRANDS[2]} products={igoto} />
        </div>
      </div>
    </div>
  );
};

export default ContentProducts;
