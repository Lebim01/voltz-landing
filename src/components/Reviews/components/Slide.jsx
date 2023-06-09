const Slide = ({ image, text, name, subname }) => {
  return (
    <div className="flex flex-col space-y-[48px] px-[40px] py-[48px] bg-[#FCFDFE]">
      <div className="flex flex-col space-y-[20px]">
        <div className="flex items-start">
          <img src="/assets/star-icon.svg" height={30} width={30} className="h-[30px] w-[30px]" />
          <img src="/assets/star-icon.svg" height={30} width={30} className="h-[30px] w-[30px]" />
          <img src="/assets/star-icon.svg" height={30} width={30} className="h-[30px] w-[30px]" />
          <img src="/assets/star-icon.svg" height={30} width={30} className="h-[30px] w-[30px]" />
          <img src="/assets/star-icon.svg" height={30} width={30} className="h-[30px] w-[30px]" />
        </div>

        <img src={image} alt="avatar" className="h-[64px] w-[64px] max-w-[64px] !hidden" />

        <span className="font-medium text-base text-left">
          {text}
        </span>
      </div>

      <div className="flex flex-col items-start">
        <span className="text-primary font-semibold text-base">{name}</span>
        <span className="text-text-tertiary font-semibold text-sm !hidden">{subname}</span>
      </div>
    </div>
  );
};

export default Slide;
