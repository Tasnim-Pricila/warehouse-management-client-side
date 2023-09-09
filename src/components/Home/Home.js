import React from "react";
import Slider from "react-slick";
import "./Home.css";
import Cars from "./Cars";
import Loading from "../Loading/Loading";
import useCars from "../../CustomHook/useCars";
import Title from "../../Shared/Title/Title";
import one from "../../images/banner-1.png";
import two from "../../images/banner-2.png";
import three from "../../images/banner-3.png";
import Services from "./Services";
import About from "./About";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  // Banner Array
  const carsBanner = [
    {
      image: one,
      smallTitle: "Limited Edition",
      title: "BMW X6",
      description: "$0 first payment paid by Porsche up to $325.",
      pricingText: "$225 /Month",
      features: "Taxes, title and fees extra",
    },
    {
      image: two,
      smallTitle: "Limited Edition",
      title: "JAGUAR XJ",
      description: "$0 first payment paid by Porsche up to $325.",
      pricingText: "$235 /Month",
      features: "Taxes, title and fees extra",
    },
    {
      image: three,
      smallTitle: "Limited Edition",
      title: "Marchediz",
      description: "$0 first payment paid by Porsche up to $325.",
      pricingText: "$245 /Month",
      features: "Taxes, title and fees extra",
    },
  ];

  const [cars, setCars, loading] = useCars(
    "https://warehouse-management-server-side-lilac.vercel.app/cars"
  );

  return loading ? (
    <Loading />
  ) : (
    <>
      <Title title="Home"></Title>
      <Slider {...settings} className="max-w-full overflow-hidden">
        {carsBanner.map((banner, index) => (
          <div key={index}>
            <div
              style={{ backgroundImage: `url('${banner.image}')` }}
              className="bg-cover h-[95vh] bg-no-repeat bg-blend-overlay md:bg-[#0000003f] bg-[#00000063] bg-center object-cover"
            >
              <div
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
                data-aos-delay="80"
                className="text-white md:px-20 flex flex-col justify-center h-full bottom-4 px-2"
              >
                <p className="font-bold md:text-3xl md:pl-2">
                  {banner.smallTitle}
                </p>
                <h1 className="md:text-9xl text-5xl">{banner.title}</h1>
                <h2 className="font-semibold pt-8">
                  <span className="text-5xl text-[#29d17d]">
                    {banner.pricingText.split(" ")[0]}
                  </span>
                  {banner.pricingText.split(" ")[1]}
                </h2>
                <p className="pt-4">{banner.description}</p>
                <p>{banner.features}</p>
                <span className="mt-12 border py-4 md:w-1/6 w-1/2 text-center uppercase cursor-pointer hover:bg-orange-400 hover:border-orange-400 hover:duration-500 tracking-wider font-semibold">
                  {" "}
                  Learn More{" "}
                </span>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <Services />
      <Cars cars={cars} />
      <About />
    </>
  );
};

export default Home;
