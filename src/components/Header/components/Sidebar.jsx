import Button from "@/components/common/Button";

const SideBar = () => {
  return (
    <div className="flex flex-col space-y-[24px] items-center py-[32px] px-[16px]">
      <a
        href="tel:+523313078145"
        className="no-underline hover:underline decoration-primary"
      >
        <span className="flex font-semibold text-base text-text-primary space-x-[8px] items-center">
          <img src="/assets/phone-icon.svg" alt="phone-icon" />
          <span>(33) 1307-8145</span>
        </span>
      </a>

      <a href="https://app.voltz.mx" className="w-full box-border">
        <Button className="border border-text-primary border-solid hover:bg-gray-200 font-semibold">
          INICIAR SESION
        </Button>
      </a>

      <a href="https://app.voltz.mx/#/home-view" className="w-full box-border">
        <Button className="w-full bg-primary text-white hover:bg-primary-dark font-semibold box-border">
          COMPRAR YA
        </Button>
      </a>

      <a
        href="https://api.whatsapp.com/send/?phone=523313078145&text=Hola%2C+quiero+que+me+cotices%3A&type=phone_number&app_absent=0"
        target="_blank"
        className="w-full box-border"
      >
        <Button className="bg-secondary text-text-primary hover:bg-secondary-dark font-semibold whitespace-nowrap px-[24px] py-[16px]">
          VENTA ASISTIDA
        </Button>
      </a>
    </div>
  );
};

export default SideBar;
