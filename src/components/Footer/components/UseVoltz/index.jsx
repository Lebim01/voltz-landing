import Button from "@/components/common/Button"

const UseVoltz = () => {
  return (
    <div className="mx-[16px] py-[40px] md:py-[24px] flex border-[0px] border-b border-border-1 border-solid md:border-r md:border-b-[0px] flex-1">
      <div className="px-[16px] flex flex-col space-y-[16px]">
        <span className="text-text-primary text-base font-semibold">Usa Voltz</span>

        <Button className="hover:bg-gray-200 border border-solid border-text-secondary font-semibold text-base md:px-[24px] md:py-[16px]">
          REGÍSTRATE
        </Button>

        <Button className="bg-primary hover:bg-primary-dark font-semibold text-base text-white md:px-[24px] md:py-[16px]">
          COMPRA YA
        </Button>

        <Button className="bg-secondary hover:bg-secondary-dark font-semibold text-base text-black md:px-[24px] md:py-[16px]">
          VENTA ASISTIDA
        </Button>
      </div>
    </div>
  )
}

export default UseVoltz