import Button from "@/components/common/Button";

const UseVoltz = () => {
  return (
    <div className="mx-[16px] py-[40px] md:py-[24px] flex border-[0px] border-b border-border-1 border-solid md:border-r md:border-b-[0px] flex-1">
      <div className="px-[16px] flex flex-col space-y-[16px]">
        <span className="text-text-primary text-base font-semibold">
          Usa Voltz
        </span>

        <a href="https://app.voltz.mx/#">
          <Button className="hover:bg-gray-200 border border-solid border-text-secondary font-semibold text-base md:px-[24px] md:py-[16px]">
            REGÍSTRATE
          </Button>
        </a>

        <a href="https://app.voltz.mx/#/home-view">
          <Button className="bg-primary hover:bg-primary-dark font-semibold text-base text-white md:px-[24px] md:py-[16px]">
            COMPRA YA
          </Button>
        </a>

        <a
          href="https://api.whatsapp.com/send/?phone=523313078145&text=Hola%2C+quiero+que+me+cotices%3A&type=phone_number&app_absent=0"
          target="_blank"
        >
          <Button className="bg-secondary hover:bg-secondary-dark font-semibold text-base text-text-primary md:px-[24px] md:py-[16px]">
            VENTA ASISTIDA
          </Button>
        </a>
      </div>
    </div>
  );
};

export default UseVoltz;
