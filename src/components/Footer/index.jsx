import UseVoltz from "./components/UseVoltz";
import ContactUs from "./components/ContactUs";
import JoinCommunity from "./components/JoinCommunity";
import Voltz from "./components/Voltz";

const Footer = () => {
  return (
    <div className="desktop-container flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:py-[0px]">
        <UseVoltz />
        <ContactUs />
        <JoinCommunity />
        <Voltz />
      </div>

      <div className="w-full md:px-[32px]">
        <div className="flex flex-col md:flex-row justify-center items-center px-[32px] py-[40px] space-y-[16px] md:space-y-[0px] md:justify-between w-full box-border md:border-t md:border-solid md:border-border-1">
          <span className="font-poppins text-text-secondary font-medium text-sm">
            ©2023 Voltz by COCOCO
          </span>
          <span className="font-poppins text-text-secondary font-medium text-sm">
            <a
              className="underline"
              href="https://cococoventures.notion.site/cococoventures/T-rminos-y-Condiciones-0436f36c8d03400d9db3116a92a96673"
              target="_blank"
            >
              Términos, condiciones
            </a>{" "}
            y{" "}
            <a
              className="underline"
              href="https://cococoventures.notion.site/cococoventures/AVISO-DE-PRIVACIDAD-INTEGRAL-e737e487c7144353aed20b88341ad3be"
              target="_blank"
            >
              aviso de privacidad
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
