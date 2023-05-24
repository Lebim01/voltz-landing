import Burger from "./components/Hamburguer"
import RightMenu from "./components/RightMenu"

const Header = ({ opened, onToggleMenu }) => {
  return (
    <div className="sticky section-padding section-border shadow-sm z-10 top-0 bg-white">
      <div className="flex h-[40px] items-center desktop-container justify-between">
        <img src="/voltz-logo.svg" alt="Logo" width={100} />
        <Burger opened={opened} onToggleMenu={onToggleMenu} />
        <RightMenu />
      </div>
    </div>
  )
}

export default Header