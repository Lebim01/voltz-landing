import Burger from "./components/Hamburguer"
import RightMenu from "./components/RightMenu"

const Header = () => {
  return (
    <div className="section-padding section-border shadow-sm z-10 sticky top-0 bg-white">
      <div className="flex h-[40px] items-center desktop-container justify-between">
        <img src="/voltz-logo.svg" alt="Logo" width={100} />
        <Burger />
        <RightMenu />
      </div>
    </div>
  )
}

export default Header