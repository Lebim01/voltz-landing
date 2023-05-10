import Button from "@/components/common/Button";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Slide from "./components/Slide";

const REVIEWS = [
  {
    image: "/assets/reviews/avatar-1.png",
    text: `"Me ahorré ir a la tienda y el tráfico. Pedí mi material y me llegó al domicilio que necesitaba. Top!"`,
    name: "Juan Carlos de Urzaiz",
    subname: "Empresa",
  },
  {
    image: "/assets/reviews/avatar-2.png",
    text: `"Todos los materiales de muy buena calidad y el servicio también muy bueno y eficiente."`,
    name: "zarekyg1",
    subname: "Web Designer",
  },
  {
    image: "/assets/reviews/avatar-3.png",
    text: `"Fue muy rápida la atención por parte de Voltz, la cotización me pareció acorde a mi estimación por lo que no dude en aceptarla."`,
    name: "Ray Pineda",
    subname: "Dog Trainer",
  },
  {
    image: "/assets/reviews/avatar-4.png",
    text: `"Me gusto mucho el servicio y mi pedido llego bien y ahorre dinero"`,
    name: "Luis Morales",
    subname: "Medical Assistant",
  },
  {
    image: "/assets/reviews/avatar-5.png",
    text: `"Muy rápida la entrega y en la fecha acordada, excelente servicio! :)."`,
    name: "Wendy Velazquez",
    subname: "President of Sales",
  },
  {
    image: "/assets/reviews/avatar-6.png",
    text: `“El servicio que recibí de Voltz fue excepcional! Fueron muy rápidos en responder”`,
    name: "Norberto López rivera",
    subname: "Marketing Coordinator",
  },
];

const Reviews = () => {
  return (
    <div className="bg-white px-[17px] py-[40px] desktop-container">
      <div className="flex flex-col space-y-[40px]">
        <div className="flex flex-col space-y-[24px] items-center">
          <span className="text-center text-primary font-semibold text-base md:text-base-md">
            COMPRAR MATERIAL ELÉCTRICO E ILUMINACIÓN
          </span>

          <span className="text-xl font-poppins text-center md:text-2xl text-text-primary max-w-[1000px]">
            <span className="font-bold font-poppins">Ayudamos a negocios como el tuyo,</span>{" "}
            a ahorrar tiempo y dinero
          </span>
        </div>

        <div className="flex space-x-[16px] border-[0px] border-b border-solid border-border-1 pb-[40px] md:justify-center">
          <a href="https://app.voltz.mx/#/home-view">
            <Button className="bg-primary hover:bg-primary-dark text-base px-[22px] py-[10px] text-white font-semibold">
              COMPRA YA
            </Button>
          </a>

          <a
            href="https://api.whatsapp.com/send/?phone=523313078145&text=Hola%2C+quiero+que+me+cotices%3A&type=phone_number&app_absent=0"
            target="_blank"
          >
            <Button className="bg-secondary hover:bg-secondary-dark text-base px-[22px] py-[10px] flex-1 md:flex-none text-text-primary font-semibold md:w-min whitespace-nowrap">
              VENTA ASISTIDA
            </Button>
          </a>
        </div>

        <Swiper
          pagination={true}
          modules={[Pagination]}
          className="h-[450px] md:!hidden"
        >
          {REVIEWS.map((review, index) => (
            <SwiperSlide key={index}>
              <Slide {...review} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="hidden md:grid grid-cols-3">
          {REVIEWS.map((review, index) => (
            <Slide {...review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
