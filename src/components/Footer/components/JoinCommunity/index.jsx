const JoinCommunity = () => {
  return (
    <div className="mx-[16px] py-[24px] flex border-[0px] border-b md:border-r md:border-b-[0px] border-border-1 border-solid md:flex-1 md:justify-center">
      <div className="flex flex-col space-y-[24px] w-min whitespace-nowrap">
        <span className="font-semibold text-base text-text-primary">
          Únete a la comunidad
        </span>

        <a href="https://www.facebook.com/voltzmx">
          <div className="flex space-x-[8px] font-poppins font-medium text-base text-text-secondary">
            <img src="/assets/facebook.svg" />
            <span>Facebook</span>
          </div>
        </a>

        <a href="https://www.instagram.com/voltz_app/?hl=es">
          <div className="flex space-x-[8px] font-poppins font-medium text-base text-text-secondary">
            <img src="/assets/instagram.svg" />
            <span>Instagram</span>
          </div>
        </a>

        <a href="https://www.linkedin.com/company/voltz-app/?viewAsMember=true">
          <div className="flex space-x-[8px] font-poppins font-medium text-base text-text-secondary">
            <img src="/assets/linkedin.svg" />
            <span>Linkedin</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default JoinCommunity;
