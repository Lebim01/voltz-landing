const JoinCommunity = () => {
  return (
    <div className="mx-[16px] py-[24px] flex border-[0px] border-b md:border-r md:border-b-[0px] border-border-1 border-solid lg:justify-center">
      <div className="flex flex-col space-y-[24px] w-min whitespace-nowrap px-[16px]">
        <span className="font-semibold text-base text-text-primary">
          Únete a la comunidad
        </span>

        <a href="https://www.facebook.com/voltzmx">
          <div className="flex space-x-[8px] text-base text-text-secondary">
            <img src="/assets/facebook.svg" alt="facebook-icon" />
            <span className="font-poppins font-medium">Facebook</span>
          </div>
        </a>

        <a href="https://www.instagram.com/voltz_app/?hl=es">
          <div className="flex space-x-[8px] text-base text-text-secondary">
            <img src="/assets/instagram.svg" alt="instagram-icon" />
            <span className="font-poppins font-medium">Instagram</span>
          </div>
        </a>

        <a href="https://www.linkedin.com/company/voltz-app/?viewAsMember=true">
          <div className="flex space-x-[8px] text-base text-text-secondary">
            <img src="/assets/linkedin.svg" alt="linkedin-icon" />
            <span className="font-poppins font-medium">Linkedin</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default JoinCommunity;
