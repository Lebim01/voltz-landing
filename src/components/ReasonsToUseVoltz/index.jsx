import Reason1 from "./components/Reason1"
import Reason2 from "./components/Reason2"
import Reason3 from "./components/Reason3"

const ReasonsToUseVoltz = () => {
  return (
    <div className="bg-white px-[16px] py-[48px] md:pb-[72px] desktop-container">
      <div className="border-[0px] border-b border-solid border-border-1 pb-[16px] md:px-[32px]">
        <span className="text-lg md:text-2xl text-text-primary">
          <span className="font-bold">3 razones</span>
          {" "}para usar Voltz
        </span>
      </div>

      <div className="pt-[80px] flex flex-col space-y-[110px] md:px-[32px]">
        <Reason1 />
        <Reason2 />
        <Reason3 />
      </div>
    </div>
  )
}

export default ReasonsToUseVoltz