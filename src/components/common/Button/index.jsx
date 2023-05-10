import { classNames } from '@/utils/classes'

const Button = (props) => {
  return (
    <div className={classNames("px-[36px] py-[16px] rounded-full flex items-center justify-center hover:cursor-pointer select-none", props.className)}>{props.children}</div>
  );
};

export default Button;
