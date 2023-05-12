import Lottie from "react-lottie";
import animationData from "../../../animations/banner.json";

console.log(animationData);

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
};

const BannerImage = () => {
  return (
    <div className="items-center justify-center w-full flex-1 hidden md:flex">
      <Lottie
        options={defaultOptions}
        height={560}
        width={560}
        className="w-[80%] md:w-[100%] max-w-[560px]"
      />
    </div>
  );
};

export default BannerImage;
