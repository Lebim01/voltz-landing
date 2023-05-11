import UseVoltz from "./components/UseVoltz"
import ContactUs from "./components/ContactUs"
import JoinCommunity from "./components/JoinCommunity"
import Voltz from "./components/Voltz"

const Footer = () => {
  return (
    <div className="desktop-container flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:py-[0px]">
        <UseVoltz />
        <ContactUs />
        <JoinCommunity />
        <Voltz />
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center px-[32px] py-[40px] space-y-[16px]">
        <span className="font-poppins text-text-secondary font-medium text-sm">©2023 Voltz by COCOCO</span>
        <span className="font-poppins text-text-secondary font-medium text-sm"><a className="underline">Términos, condiciones</a> y <a className="underline">aviso de privacidad</a></span>
      </div>
    </div>
  )
}

export default Footer