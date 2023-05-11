import './app.css'
import 'swiper/css';
import 'swiper/css/pagination';

import { useState } from 'preact/hooks';

import Banner from './components/Banner'
import Header from './components/Header'
import Partners from './components/Partners'
import PassUsWork from './components/PassUsWork'
import ReasonsToUseVoltz from './components/ReasonsToUseVoltz'
import Reviews from './components/Reviews'
import TopBrands from './components/TopBrands'
import TopProducts from './components/TopProducts'
import UseVoltz from './components/UseVoltz';
import Footer from './components/Footer';
import SideBar from './components/Header/components/Sidebar';

export function App() {
  const [opened, setOpened] = useState(false)

  return (
    <>
      <div className='relative overflow-hidden'>
        <div className='bg-white transition-all duration-300 lg:!translate-x-0' style={{ transform: opened ? "translateX(-247px)" : "translateX(0px)" }}>
          <Header opened={opened} onToggleMenu={() => setOpened(s => !s)} />
          <Banner />
          <Partners />
          <TopProducts />
          <TopBrands />
          <ReasonsToUseVoltz />
          <PassUsWork />
          <Reviews />
          <UseVoltz />
          <Footer />
        </div>
        <div className='lg:hidden absolute top-0 right-0 bg-[#E4E9FC] w-[247px] h-[-webkit-fill-available] transition-all duration-300' style={{ transform: opened ? "translateX(0)" : "translateX(247px)" }}>
          <SideBar />
        </div>
      </div>
    </>
  )
}
