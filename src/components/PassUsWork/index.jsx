import Button from "@/components/common/Button";

const PassUsWork = () => {
  return (
    <div className="bg-primary px-[16px] md:px-[48px] py-[48px] md:py-[90px]">
      <div className="flex flex-col items-center lg:flex-row space-y-[24px] desktop-container lg:space-x-[80px]">
        <div className="flex flex-col space-y-[24px] flex-1">
          <div className="flex flex-col space-y-[16px]">
            <span className="text-white font-semibold text-xl font-poppins md:text-3xl">
              ¡Pásanos la chamba!
            </span>
            <span className="font-medium text-white text-base-md">
              Si no tienes tiempo para hacerlo tu mismo, nuestros expertos
              buscarán y cotizarán todo el listado de material que necesitas.
              ¡Rapidísimo!
            </span>
          </div>
          <a
            href="https://api.whatsapp.com/send/?phone=523313078145&text=Hola%2C+quiero+que+me+cotices%3A&type=phone_number&app_absent=0"
            target="_blank"
          >
            <Button className="bg-secondary hover:bg-secondary-dark px-[24px] py-[16px] font-semibold text-base w-min whitespace-nowrap">
              VENTA ASISTIDA
            </Button>
          </a>
        </div>

        <a
          href="https://api.whatsapp.com/send/?phone=523313078145&text=Hola%2C+quiero+que+me+cotices%3A&type=phone_number&app_absent=0"
          target="_blank"
          className="w-[80%] max-w-[800px] md:hidden"
        >
          <img
            src="/assets/passus/mobile.png"
            alt="pass us work image"
            loading="lazy"
            className="w-full"
          />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=523313078145&text=Hola%2C+quiero+que+me+cotices%3A&type=phone_number&app_absent=0"
          target="_blank"
          className="hidden md:block flex-1 w-full lg:w-1/2"
        >
          <img
            src="/assets/passus/desktop.png"
            alt="pass us work image"
            loading="lazy"
            className="w-full"
          />
        </a>
      </div>
    </div>
  );
};

export default PassUsWork;
