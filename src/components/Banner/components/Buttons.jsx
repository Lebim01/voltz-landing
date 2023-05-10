import Button from "@/components/common/Button";

const Buttons = () => {
  return (
    <div className="flex flex-col space-y-[32px]">
      <div className="flex flex-col md:flex-row space-y-[18px] md:space-y-0 md:space-x-[16px]">
        <Button className="bg-primary hover:bg-primary-dark text-white w-[180px] font-base font-semibold md:w-min whitespace-nowrap">
          COMPRAR YA
        </Button>
        <Button className="bg-secondary hover:bg-secondary-dark text-text-secondary w-[180px] font-base font-semibold md:w-min whitespace-nowrap">
          VENTA ASISTIDA
        </Button>
      </div>
      <div className="flex items-center space-x-[24px]">
        <Button className="!p-0 w-[64px] h-[64px] bg-text-secondary hover:bg-text-primary">
          <img src="/assets/play-icon.svg" alt="Play icon" />
        </Button>
        <span className="font-semibold font-base">VER VIDEO</span>
      </div>
    </div>
  );
};

export default Buttons;
