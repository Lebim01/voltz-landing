import UseVoltz from "./components/UseVoltz"
import ContactUs from "./components/ContactUs"
import JoinCommunity from "./components/JoinCommunity"
import Voltz from "./components/Voltz"

const Footer = () => {
  return (
    <div className="desktop-container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:py-[0px]">
        <UseVoltz />
        <ContactUs />
        <JoinCommunity />
        <Voltz />
      </div>
    </div>
  )
}

export default Footer