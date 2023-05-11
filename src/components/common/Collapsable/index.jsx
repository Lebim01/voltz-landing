import { classNames } from "@/utils/classes"

const Collapsable = ({ title, icon, opened, onToggle, className, iconProps, ...rest }) => {

  const height = iconProps?.height || 26
  const width = iconProps?.width || 26

  return (
    <div className={classNames("bg-white px-[16px] py-[32px] flex", className)} onClick={onToggle} {...rest}>
      <div className="flex items-center space-x-[12px] flex-1 overflow-hidden">
        <img {...iconProps} src={icon} height={height} width={width} alt="icon"  />
        <span className="font-semibold max-lines-1">
          {title}
        </span>
      </div>
      <div className="h-[22px] w-[22px] flex items-center justify-center">
        <img src={opened ? "/assets/arrow-up-icon.svg" : "/assets/arrow-down-icon.svg"} alt="collapsable-arrow-icon" />
      </div>
    </div>
  );
};

export default Collapsable;
