import Text from './components/Text'
import Buttons from './components/Buttons'
import BannerImage from './components/Image';

const Banner = () => {
  return (
    <div className="section-padding desktop-container flex flex-col space-y-[32px] md:space-y-[90px] md:flex-row md:justify-center">
      <div className='flex flex-col space-y-[32px]'>
        <Text />
        <Buttons />
      </div>

      <BannerImage />
    </div>
  );
};

export default Banner;
