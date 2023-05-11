const Slide = ({ image, text, name, subname }) => {
  return (
    <div className="flex flex-col space-y-[48px] px-[40px] py-[48px] bg-[#FCFDFE]">
      <div className="flex flex-col space-y-[20px]">
        <img src={image} alt="avatar" className="h-[64px] w-[64px] max-w-[64px]" />

        <span className="font-medium text-base text-left">
          {text}
        </span>
      </div>

      <div className="flex flex-col items-start">
        <span className="text-[#202225] font-semibold text-base">{name}</span>
        <span className="text-text-tertiary font-semibold text-sm">{subname}</span>
      </div>
    </div>
  );
};

export default Slide;
