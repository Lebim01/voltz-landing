import Button from "@/components/common/Button";

const Reason3 = () => {
  return (
    <div className="flex flex-col lg:flex-row space-y-[28px] lg:space-y-[0px] lg:space-x-[60px] lg:items-center box-border">
      <div>
        <img
          src="/assets/reasons/reason-3.svg"
          className="w-[150px] md:w-[256px]"
          alt="reason 3 image"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col space-y-[24px]">
        <Button className="rounded-[4px] bg-text-primary text-white text-sm w-min whitespace-nowrap font-semibold px-[16px] py-[8px] leading-[24px] hover:cursor-default">
          MÁS CÓMODO
        </Button>
        <div className="flex flex-col space-y-[16px]">
          <span className="text-lg md:text-2xl text-text-primary font-poppins">
            Tú decides cómo quieres comprar.
          </span>
          <span className="text-text-tertiary text-base md:text-base-md">
            En Voltz, tienes el control total de tu proceso de compra. Puedes
            navegar y comprar en nuestra plataforma de manera autogestionada, o
            si lo prefieres, nuestros agentes expertos te ayudarán a encontrar y
            seleccionar los productos que necesitas.
          </span>
        </div>
        <div className="flex space-x-[16px]">
          <a href="https://app.voltz.mx/#/home-view">
            <Button className="bg-primary hover:bg-primary-dark w-min whitespace-nowrap text-white font-semibold text-base px-[24px] py-[10px]">
              COMPRA YA
            </Button>
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=523313078145&text=Hola%2C+quiero+que+me+cotices%3A&type=phone_number&app_absent=0"
            target="_blank"
          >
            <Button className="bg-secondary hover:bg-secondary-dark w-min whitespace-nowrap text-text-primary font-semibold text-base px-[24px] py-[10px]">
              VENTA ASISTIDA
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Reason3;
