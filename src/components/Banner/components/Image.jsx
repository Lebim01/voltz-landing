const BannerImage = () => {
  return (
    <div className="items-center justify-center w-full flex-1 hidden md:flex">
      <lottie-player
        autoplay
        loop
        mode="normal"
        src="/banner.json"
        className="w-[80%] md:w-[100%] max-w-[560px]"
      ></lottie-player>
    </div>
  );
};

export default BannerImage;
