import React, { useRef, useState } from "react";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";
import "tailwindcss/tailwind.css";

type dataProps = {
  cover: string;
  title: string;
};

const data: dataProps[] = [
  {
    cover: "/services/1.webp",
    title: "Managed Cloud Services",
  },
  {
    cover: "/services/2.webp",
    title: "Cloud Migration",
  },
  {
    cover: "/services/3.webp",
    title: "DevOps",
  },
  {
    cover: "/services/4.webp",
    title: "Data Analytics",
  },
  {
    cover: "/services/5.webp",
    title: "Cyber Security",
  },
  {
    cover: "/services/6.jpeg",
    title: "Web Development",
  },
  {
    cover: "/services/7.jpeg",
    title: "UI/UX Design",
  },
  {
    cover: "/services/8.jpeg",
    title: "Quality Assurance",
  },
  {
    cover: "/services/9.jpeg",
    title: "IT Consulting",
  },
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef<any>();

  const handleSlideChange = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="bg-gray-100 flex justify-center flex-col gap-5 py-16">
      <h1 className="lg:text-5xl sm:text-4xl text-3xl text-black font-bold text-center mb-16">
        Our Services
      </h1>

      <div style={{ width: "100%", position: "relative" }}>
        <ResponsiveContainer
          carouselRef={ref}
          render={(parentWidth) => {
            let currentVisibleSlide = 5;
            if (parentWidth <= 1280) currentVisibleSlide = 3;
            if (parentWidth <= 720) currentVisibleSlide = 1;
            return (
              <StackedCarousel
                data={data}
                carouselWidth={parentWidth}
                slideWidth={parentWidth < 720 ? parentWidth - 40 : 500}
                slideComponent={(props) => (
                  <Card {...props} currentIndex={currentIndex} />
                )}
                maxVisibleSlide={5}
                currentVisibleSlide={currentVisibleSlide}
                onActiveSlideChange={handleSlideChange}
                useGrabCursor
                ref={ref}
              />
            );
          }}
        />

        <div className="absolute cursor-pointer top-40 sm:left-40 left-10 z-30 flex justify-center items-center bg-white rounded-xl w-10 h-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => {
              if (ref.current) {
                ref.current.goBack();
              }
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>

        <div className="absolute cursor-pointer top-40 sm:right-40 right-10 z-30 flex justify-center items-center bg-white rounded-xl w-10 h-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => {
              if (ref.current) {
                ref.current.goNext();
              }
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>

      <div className="flex justify-center mt-4 mb-8">
        {data.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${
              currentIndex === index ? "bg-black" : "bg-gray-300"
            } cursor-pointer`}
            onClick={() => {
              if (ref.current) {
                ref.current.swipeTo(index - currentIndex);
              }
              handleSlideChange(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;

export const Card = React.memo(function (props: {
  data: dataProps[];
  dataIndex: number;
  currentIndex: number;
}) {
  const { data, dataIndex, currentIndex } = props;
  const { title, cover } = data[dataIndex];

  // Determine if this slide is the active one
  const isActiveSlide = dataIndex === currentIndex;

  return (
    <div
      className={`bg-white shadow-lg text-center h-full z-10 transform transition-transform duration-500 ease-in-out ${
        isActiveSlide ? "opacity-100" : "hover:scale-105 bg-[#f0f0f0]"
      }`}
    >
      <img
        height={1000}
        width={1000}
        className={`h-72 w-full object-cover ${
          isActiveSlide ? "opacity-100" : "opacity-60"
        }`}
        draggable={false}
        src={`${cover}`}
      />
      <div className="p-6">
        <h1 className="font-bold text-xl">{title}</h1>
        <p className="text-sm pt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero amet
          aliquam, praesentium corrupti, quidem accusamus non saepe.
        </p>
      </div>
    </div>
  );
});
