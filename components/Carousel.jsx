import Image from "next/image";
import Title from "./ui/Title";
import Slider from "react-slick";


const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 30000,
    appenDots: (dots) => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 border bg-white rounded-full mt-10"></div>
    ),
  };

  return (
    <div className="h-screen w-full container mx-auto -mt-[88px]">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="relative h-full w-full">
          <Image
            src="/images/hero-bg.jpg"
            alt=""
            layout="fill"
            priority
            objectFit="cover"
          />
        </div>
      </div>
      <Slider {...settings}>
        <div>
          <div className="mt-48  text-white flex flex-col items-start gap-y-10">
            <Title addClass="text-6xl">African Cuisine</Title>
            <p className="text-sm sm:w-2/5 w-full">
              Order African food in U.S.A and Canada.
            </p>
             <button className="btn-primary">
<Link href="/menu">Order Now</Link></button>

          </div>
        </div>
        <div>
          <div className="relative text-white top-48 flex flex-col items-start gap-y-10">
            <Title addClass="text-6xl">African Food Restaurant</Title>
            <p className="text-sm sm:w-2/5 w-full">
              Book a cookout.
            </p>
           <button className="btn"> <Link href="/reservation">Reserve Now
</Link></button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
