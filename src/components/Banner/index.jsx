import Text from './components/Text'
import Buttons from './components/Buttons'
import BannerImage from './components/Image';

const Banner = () => {
  return (
    <div className="section-padding py-[32px] md:py-[92px] desktop-container flex flex-col space-y-[32px] md:space-y-[0px] md:flex-row md:justify-center">
      <div className='flex flex-col space-y-[32px] flex-1'>
        <Text />
        <Buttons />
      </div>

      <BannerImage />
    </div>
  );
};

export default Banner;
