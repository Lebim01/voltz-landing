const Burger = ({ opened, onToggleMenu }) => {
  return (
    <div className="flex items-center justify-center h-[40px] w-[40px] hover:cursor-pointer active:bg-text-primary lg:hidden" onClick={onToggleMenu}>
      <div>
        {!opened && <img src="/assets/hamburger-icon.svg" alt="sidemenu-icon" />}
        {opened && <img src="/assets/close-icon.svg" alt="close-sidemenu-icon" />}
      </div>
    </div>
  )
}

export default Burger