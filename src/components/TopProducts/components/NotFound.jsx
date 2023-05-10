import Button from "@/components/common/Button"

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center px-[16px] py-[24px] space-y-[28px]">
      <div className="flex justify-center">
        <span className="font-poppins text-xl text-text-primary font-semibold">¿No lo encuentras?</span>
      </div>

      <div className="flex justify-center">
        <img src="/assets/not-found-image.webp" className="w-[52px]" alt="not-found-image" loading="lazy" />
      </div>

      <span className="text-base text-center text-text-primary">Sín costo, <span className="font-bold">nosotros lo buscamos por tí</span> y lo agregamos a tu cotización.</span>

      <Button className="bg-text-primary hover:bg-text-secondary text-white font-semibold text-base">
        SOLICITAR PRODUCTO
      </Button>
    </div>
  )
}

export default NotFound