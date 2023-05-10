import './app.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Swiper, { Navigation, Pagination } from 'swiper';

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

const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
});

export function App() {
  return (
    <>
      <Header />
      <Banner />
      <Partners />
      <TopProducts />
      <TopBrands />
      <ReasonsToUseVoltz />
      <PassUsWork />
      <Reviews />
      <UseVoltz />
      <Footer />
    </>
  )
}
