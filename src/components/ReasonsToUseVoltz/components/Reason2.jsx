import Button from "@/components/common/Button";

const Reason2 = () => {
  return (
    <div className="flex flex-col md:flex-row space-y-[28px] md:space-y-[0px] md:space-x-[60px] md:items-center">
      <div>
        <img
          src="/assets/reasons/reason-2.svg"
          className="w-[150px] md:w-[256px]"
          alt="reason 2 image"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col space-y-[24px]">
        <Button className="rounded-[4px] bg-text-primary text-white text-sm w-min whitespace-nowrap font-semibold px-[16px] py-[8px] leading-[24px]">
          MÁS CONVENIENTE
        </Button>
        <div className="flex flex-col space-y-[16px]">
          <span className="text-lg md:text-2xl text-text-primary">
            La mejor decisión en cada compra.
          </span>
          <span className="text-text-tertiary text-base md:text-base-md">
            Precios competitivos, conectados y comparados, en tiempo real, con
            el mercado. Nuestra inteligencia artificial te ofrecerá, siempre, el
            “best deal” de cada material y ajustará precios según la cantidad
            que vas a comprar y el tiempo y lugar de entrega. Siente la
            tranquilidad de saber que estás tomando la mejor decisión.
          </span>
        </div>
        <a href="https://app.voltz.mx/#/home-view">
          <Button className="bg-primary hover:bg-primary-dark w-min whitespace-nowrap text-white font-semibold text-base px-[24px] py-[10px]">
            COMPRA YA
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Reason2;
