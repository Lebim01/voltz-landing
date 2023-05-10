import Button from "@/components/common/Button";

const UseVoltz = () => {
  return (
    <div className="bg-bg-transparent">
      <div className="hidden md:flex flex-col desktop-container px-[32px] 2xl:px-[0px] py-[72px] !items-start relative">
        <div className="flex border-[0px] border-b border-solid border-white/20 pb-[16px] justify-start w-full">
          <div className="flex-1 flex flex-col space-y-[16px]">
            <span className="text-3xl text-white font-poppins">
              ¿Aún no usas Voltz?
            </span>
            <span className="text-lg text-white">
              Compra más fácil y rápido tus materiales eléctricos e iluminación
              con Voltz
            </span>
          </div>
          <div className="flex-1 hidden lg:block"></div>
        </div>

        <div className="grid grid-cols-2 w-full py-[48px] gap-y-[32px] gap-x-[88px]">
          <div className="flex justify-start space-x-[16px] items-start">
            <img src="/assets/right-arrow-icon.svg" className="w-[30px]" alt="arrow icon" />
            <div className="flex-1 text-white text-lg">
              <span>Centralización de catálogos digitales de marcas.</span>
            </div>
          </div>

          <div className="flex justify-start space-x-[16px] items-start">
            <img src="/assets/right-arrow-icon.svg" className="w-[30px]" alt="arrow icon" />
            <div className="flex-1 text-white text-lg">
              <span>
                Sincronización de stock y precios de cientos de distribuidores y
                fabricantes.
              </span>
            </div>
          </div>

          <div className="flex justify-start space-x-[16px] items-start">
            <img src="/assets/right-arrow-icon.svg" className="w-[30px]" alt="arrow icon" />
            <div className="flex-1 text-white text-lg">
              <span>
                Utilización de inteligencia artificial para encontrar justo lo
                que necesitas
              </span>
            </div>
          </div>

          <div className="flex justify-start space-x-[16px] items-start">
            <img src="/assets/right-arrow-icon.svg" className="w-[30px]" alt="arrow icon" />
            <div className="flex-1 text-white text-lg">
              <span>Obtención de la mejor oferta de precio del mercado.</span>
            </div>
          </div>

          <div className="flex justify-start space-x-[16px] items-start">
            <img src="/assets/right-arrow-icon.svg" className="w-[30px]" alt="arrow icon" />
            <div className="flex-1 text-white text-lg">
              <span>
                Simplificación del proceso de pago, entrega y facturación.
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-[16px]">
          <a href="https://app.voltz.mx/#/home-view">
            <Button className="bg-primary hover:bg-primary-dark font-semibold text-base text-white">
              COMPRA YA
            </Button>
          </a>

          <a
            href="https://api.whatsapp.com/send/?phone=523313078145&text=Hola%2C+quiero+que+me+cotices%3A&type=phone_number&app_absent=0"
            target="_blank"
          >
            <Button className="bg-secondary hover:bg-secondary-dark font-semibold text-base text-text-primary w-min whitespace-nowrap">
              VENTA ASISTIDA
            </Button>
          </a>
        </div>

        <img
          src="/assets/hand.png"
          loading="lazy"
          className="absolute h-[200px] right-0 lg:right-[20%] top-[-5%]"
          alt="hand image"
        />
      </div>
    </div>
  );
};

export default UseVoltz;
