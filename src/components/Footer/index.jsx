import UseVoltz from "./components/UseVoltz"
import ContactUs from "./components/ContactUs"
import JoinCommunity from "./components/JoinCommunity"
import Voltz from "./components/Voltz"

const Footer = () => {
  return (
    <div className="desktop-container">
      <div className="flex flex-col md:flex-row md:py-[72px]">
        <UseVoltz />
        <ContactUs />
        <JoinCommunity />
        <Voltz />
      </div>
    </div>
  )
}

export default Footer