const ContactUs = () => {
  return (
    <div className="mx-[16px] py-[24px] flex border-[0px] border-b md:border-r md:border-b-[0px] border-border-1 border-solid md:flex-1 md:justify-center">
      <div className="flex flex-col space-y-[24px] w-min whitespace-nowrap">
        <span className="font-semibold text-base text-text-primary">
          Contáctanos
        </span>

        <div className="flex flex-col font-poppins font-medium text-base text-text-secondary">
          <span>Guadalajara</span>
          <span>(33) 1307-8145</span>
        </div>

        <div className="flex flex-col font-poppins font-medium text-base text-text-secondary">
          <span>Ciudad de México</span>
          <span>(56) 2126-3800</span>
        </div>

        <div className="flex flex-col font-poppins font-medium text-base text-text-secondary">
          <span>Envíos y garantías</span>
          <span>(33) 1307-8146</span>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
