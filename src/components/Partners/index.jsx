const partners = [
  "/assets/partners/partner-1.webp",
  "/assets/partners/partner-2.webp",
  "/assets/partners/partner-3.webp",
  "/assets/partners/partner-4.webp",
  "/assets/partners/partner-5.webp",
  "/assets/partners/partner-6.webp",
  "/assets/partners/partner-7.webp",
  "/assets/partners/partner-8.webp",

  "/assets/partners/partner-9.webp",
  "/assets/partners/partner-10.webp",
  "/assets/partners/partner-11.webp",
  "/assets/partners/partner-12.webp",
  "/assets/partners/partner-13.webp",
  "/assets/partners/partner-14.webp",
  "/assets/partners/partner-15.webp",
  "/assets/partners/partner-16.webp",

  "/assets/partners/partner-17.webp",
  "/assets/partners/partner-18.webp",
  "/assets/partners/partner-19.webp",
  "/assets/partners/partner-20.webp",
  "/assets/partners/partner-21.webp",
  "/assets/partners/partner-22.webp",
  "/assets/partners/partner-23.webp",
  "/assets/partners/partner-24.webp",

  "/assets/partners/partner-25.webp",
  "/assets/partners/partner-26.webp",
  "/assets/partners/partner-27.webp",
  "/assets/partners/partner-28.webp",
  "/assets/partners/partner-29.webp",
  "/assets/partners/partner-30.webp",
  "/assets/partners/partner-31.webp",
  "/assets/partners/partner-32.webp",
  
  "/assets/partners/partner-33.webp",
  "/assets/partners/partner-34.webp",
  "/assets/partners/partner-35.webp",
  "/assets/partners/partner-36.webp",
  "/assets/partners/partner-37.webp",
  "/assets/partners/partner-38.webp",
  "/assets/partners/partner-39.webp",

  "/assets/partners/partner-40.webp",
  "/assets/partners/partner-41.webp",
  "/assets/partners/partner-42.webp",
  "/assets/partners/partner-43.webp",
  "/assets/partners/partner-44.webp",
  "/assets/partners/partner-45.webp",
  "/assets/partners/partner-46.webp",
  "/assets/partners/partner-47.webp",

  "/assets/partners/partner-48.webp",
  "/assets/partners/partner-49.webp",
  "/assets/partners/partner-50.webp",
  "/assets/partners/partner-51.webp",
  "/assets/partners/partner-52.webp",
  "/assets/partners/partner-53.webp",
  "/assets/partners/partner-54.webp",
  "/assets/partners/partner-55.webp",

  "/assets/partners/partner-56.webp",
  "/assets/partners/partner-57.webp",
  "/assets/partners/partner-58.webp",
  "/assets/partners/partner-59.webp",
  "/assets/partners/partner-60.webp",
  "/assets/partners/partner-61.webp",
  "/assets/partners/partner-62.webp",
  "/assets/partners/partner-63.webp",

  "/assets/partners/partner-64.webp",
  "/assets/partners/partner-65.webp",
  "/assets/partners/partner-66.webp",
  "/assets/partners/partner-67.webp",
  "/assets/partners/partner-68.webp",
  "/assets/partners/partner-69.webp",
  "/assets/partners/partner-70.webp",
  "/assets/partners/partner-71.webp",

  "/assets/partners/partner-72.webp",
  "/assets/partners/partner-73.webp",
  "/assets/partners/partner-74.webp",
  "/assets/partners/partner-75.webp",
  "/assets/partners/partner-76.webp",
  "/assets/partners/partner-77.webp",
  "/assets/partners/partner-78.webp",
  "/assets/partners/partner-79.webp",

  "/assets/partners/partner-80.webp",
  "/assets/partners/partner-81.webp",
  "/assets/partners/partner-82.webp",
  "/assets/partners/partner-83.webp",
  "/assets/partners/partner-84.webp",
  "/assets/partners/partner-85.webp",
  "/assets/partners/partner-86.webp",
  "/assets/partners/partner-87.webp",

  "/assets/partners/partner-88.webp",
  "/assets/partners/partner-89.webp",
  "/assets/partners/partner-90.webp",
  "/assets/partners/partner-91.webp",
  "/assets/partners/partner-92.webp",
  "/assets/partners/partner-93.webp",
  "/assets/partners/partner-94.webp",
  "/assets/partners/partner-95.webp",

  "/assets/partners/partner-96.webp",
  "/assets/partners/partner-97.webp",
  "/assets/partners/partner-98.webp",
  "/assets/partners/partner-99.webp",
  "/assets/partners/partner-100.webp",
  "/assets/partners/partner-101.webp",
  "/assets/partners/partner-102.webp",
  "/assets/partners/partner-103.webp",
];

const Partners = () => {
  return (
    <div className="bg-white px-[22px] py-[32px] overflow-hidden border-[0px] border-b border-solid border-border-1 relative h-[98px] min-h-[98px]">
      <div className="absolute left-[32px] top-[32px] flex space-x-[16px] h-[98px] min-h-[98px] max-h-[98px] partners-animation carousel-slow">
        {partners.map((url) => (
          <div className="h-[98px] w-[98px] min-w-[98px] min-h-[98px] flex items-center justify-center border border-solid border-border-2" key={url}>
            <img src={url} alt="Partner logo" className="max-w-[90px] max-h-[90%] object-contain" priority="async" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
