const ContactUs = () => {
  return (
    <div className="mx-[16px] px-[16px] py-[24px] flex border-[0px] border-b md:border-r md:border-b-[0px] border-border-1 border-solid md:flex-1 lg:justify-center">
      <div className="flex flex-col space-y-[24px] w-min whitespace-nowrap">
        <span className="font-semibold text-base text-text-primary">
          Contáctanos
        </span>

        <div className="flex flex-col text-base text-text-secondary">
          <span className="font-poppins font-medium">Guadalajara</span>
          <span className="font-poppins font-medium">(33) 1307-8145</span>
        </div>

        <div className="flex flex-col text-base text-text-secondary">
          <span className="font-poppins font-medium">Ciudad de México</span>
          <span className="font-poppins font-medium">(56) 2126-3800</span>
        </div>

        <div className="flex flex-col text-base text-text-secondary">
          <span className="font-poppins font-medium">Envíos y garantías</span>
          <span className="font-poppins font-medium">(33) 1307-8146</span>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
