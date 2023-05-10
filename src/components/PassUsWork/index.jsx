import Button from "@/components/common/Button";

const PassUsWork = () => {
  return (
    <div className="bg-primary px-[18px] py-[40px]">
      <div className="flex flex-col md:flex-row space-y-[24px] desktop-container md:space-x-[144px]">
        <div className="flex flex-col space-y-[24px]">
          <div className="flex flex-col space-y-[16px]">
            <span className="text-white font-semibold text-xl font-poppins md:text-3xl">
              ¡Pásanos la chamaba!
            </span>
            <span className="font-medium text-white text-base-md">
              Si no tienes tiempo para hacerlo tu mismo, nuestros expertos
              buscarán y cotizarán todo el listado de material que necesitas.
              ¡rapidísimo!
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

        <img
          src="/assets/passus/mobile.png"
          className="w-full max-w-[800px] md:hidden"
          loading="lazy"
        />
        <img
          src="/assets/passus/desktop.png"
          className="w-full hidden md:block"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default PassUsWork;
