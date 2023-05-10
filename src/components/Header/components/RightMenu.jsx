import Button from "@/components/common/Button";

const RightMenu = () => {
  return (
    <div className="hidden lg:flex space-x-[16px] items-center">
      <a
        href="tel:+523313078145"
        className="no-underline hover:underline decoration-primary"
      >
        <span className="flex font-semibold text-base text-text-primary space-x-[8px] items-center">
          <img src="/assets/phone-icon.svg" alt="phone-icon" />
          <span>(33) 1307-8145</span>
        </span>
      </a>

      <a href="https://app.voltz.mx">
        <Button className="w-min whitespace-nowrap border border-text-primary border-solid hover:bg-gray-200 font-semibold">
          INICIAR SESION
        </Button>
      </a>

      <a
        href="https://app.voltz.mx/#/home-view"
      >
        <Button className="w-min whitespace-nowrap bg-primary text-white hover:bg-primary-dark font-semibold">
          COMPRAR YA
        </Button>
      </a>

      <a
        href="https://api.whatsapp.com/send/?phone=523313078145&text=Hola%2C+quiero+que+me+cotices%3A&type=phone_number&app_absent=0"
        target="_blank"
      >
        <Button className="w-min whitespace-nowrap bg-secondary text-black hover:bg-secondary-dark font-semibold px-[24px] py-[16px]">
          VENTA ASISTIDA
        </Button>
      </a>
    </div>
  );
};

export default RightMenu;
