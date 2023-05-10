import Button from "@/components/common/Button";

const Reason1 = () => {
  return (
    <div className="flex flex-col md:flex-row space-y-[28px] md:space-y-[0px] md:space-x-[60px] md:items-center">
      <div>
        <img
          src="/assets/reasons/reason-1.svg"
          className="w-[150px] md:w-[256px]"
          alt="reason 1 image"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col space-y-[24px]">
        <Button className="rounded-[4px] bg-text-primary text-white text-sm w-min whitespace-nowrap font-semibold px-[16px] py-[8px] leading-[24px] hover:cursor-default">
          MÁS FACIL
        </Button>
        <div className="flex flex-col space-y-[16px]">
          <span className="text-lg md:text-2xl text-text-primary">
            Encuentra todo en un solo lugar.
          </span>
          <span className="text-text-tertiary text-base md:text-base-md">
            En Voltz, encuentras justo el material que necesitas y las
            alternativas equivalentes de otras marcas. Centralizamos los
            catálogos digitales de todas las marcas y lo sincronizamos al
            inventario disponible, de cientos de distribuidores confiables y
            fabricantes de calidad.
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

export default Reason1;
