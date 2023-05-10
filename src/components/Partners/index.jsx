const partners = [
  "/assets/partners/partner-1.png",
  "/assets/partners/partner-2.png",
  "/assets/partners/partner-3.png",
  "/assets/partners/partner-4.png",
  "/assets/partners/partner-5.png",
  "/assets/partners/partner-6.png",
  "/assets/partners/partner-7.png",
  "/assets/partners/partner-8.png",
  "/assets/partners/partner-9.png",
  "/assets/partners/partner-10.png",
  "/assets/partners/partner-11.png",
  "/assets/partners/partner-12.png",
  "/assets/partners/partner-13.png",
  "/assets/partners/partner-14.png",
  "/assets/partners/partner-15.png",
  "/assets/partners/partner-16.png",
  "/assets/partners/partner-17.png",
  "/assets/partners/partner-18.png",
  "/assets/partners/partner-19.png",
  "/assets/partners/partner-20.png",
  "/assets/partners/partner-21.png",
  "/assets/partners/partner-22.png",
  "/assets/partners/partner-23.png",
  "/assets/partners/partner-24.png",
  "/assets/partners/partner-25.png",
  "/assets/partners/partner-26.png",
  "/assets/partners/partner-27.png",
  "/assets/partners/partner-28.png",
  "/assets/partners/partner-29.png",
  "/assets/partners/partner-30.png",
  "/assets/partners/partner-31.png",
  "/assets/partners/partner-32.png",
  "/assets/partners/partner-33.png",
  "/assets/partners/partner-34.png",
  "/assets/partners/partner-35.png",
  "/assets/partners/partner-36.png",
  "/assets/partners/partner-37.png",
  "/assets/partners/partner-38.png",
  "/assets/partners/partner-39.png",

  "/assets/partners/partner-40.png",
  "/assets/partners/partner-41.png",
  "/assets/partners/partner-42.png",
  "/assets/partners/partner-43.png",
  "/assets/partners/partner-44.png",
  "/assets/partners/partner-45.png",
  "/assets/partners/partner-46.png",
  "/assets/partners/partner-47.png",

  "/assets/partners/partner-48.png",
  "/assets/partners/partner-49.png",
  "/assets/partners/partner-50.png",
  "/assets/partners/partner-51.png",
  "/assets/partners/partner-52.png",
  "/assets/partners/partner-53.png",
  "/assets/partners/partner-54.png",
  "/assets/partners/partner-55.png",

  "/assets/partners/partner-56.png",
  "/assets/partners/partner-57.png",
  "/assets/partners/partner-58.png",
  "/assets/partners/partner-59.png",
  "/assets/partners/partner-60.png",
  "/assets/partners/partner-61.png",
  "/assets/partners/partner-62.png",
  "/assets/partners/partner-63.png",

  "/assets/partners/partner-64.png",
  "/assets/partners/partner-65.png",
  "/assets/partners/partner-66.png",
  "/assets/partners/partner-67.png",
  "/assets/partners/partner-68.png",
  "/assets/partners/partner-69.png",
  "/assets/partners/partner-70.png",
  "/assets/partners/partner-71.png",

  "/assets/partners/partner-72.png",
  "/assets/partners/partner-73.png",
  "/assets/partners/partner-74.png",
  "/assets/partners/partner-75.png",
  "/assets/partners/partner-76.png",
  "/assets/partners/partner-77.png",
  "/assets/partners/partner-78.png",
  "/assets/partners/partner-79.png",

  "/assets/partners/partner-80.png",
  "/assets/partners/partner-81.png",
  "/assets/partners/partner-82.png",
  "/assets/partners/partner-83.png",
  "/assets/partners/partner-84.png",
  "/assets/partners/partner-85.png",
  "/assets/partners/partner-86.png",
  "/assets/partners/partner-87.png",

  "/assets/partners/partner-88.png",
  "/assets/partners/partner-89.png",
  "/assets/partners/partner-90.png",
  "/assets/partners/partner-91.png",
  "/assets/partners/partner-92.png",
  "/assets/partners/partner-93.png",
  "/assets/partners/partner-94.png",
  "/assets/partners/partner-95.png",

  "/assets/partners/partner-96.png",
  "/assets/partners/partner-97.png",
  "/assets/partners/partner-98.png",
  "/assets/partners/partner-99.png",
  "/assets/partners/partner-100.png",
  "/assets/partners/partner-101.png",
  "/assets/partners/partner-102.png",
  "/assets/partners/partner-103.png",
];

const Partners = () => {
  return (
    <div className="bg-white px-[22px] py-[32px] overflow-hidden border-[0px] border-b border-solid border-border-1 relative h-[140px] min-h-[140px] desktop-container">
      <div className="absolute left-[32px] top-[32px] flex space-x-[16px] h-[140px] min-h-[140px] max-h-[140px] partners-animation" style={{ animationDuration: `${partners.length * 5}s`  }}>
        {partners.map((url) => (
          <div className="h-[140px] w-[140px] min-w-[140px] min-h-[140px] flex items-center justify-center border border-solid border-border-2" key={url}>
            <img src={url} alt="Partner logo" className="max-w-[130px] max-h-[90%] object-contain" priority="async" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
