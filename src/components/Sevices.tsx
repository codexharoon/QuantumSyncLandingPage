import React, { useState } from "react";
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
    cover: "https://images6.alphacoders.com/679/thumb-1920-679459.jpg",
    title: "Interstaller",
  },
  {
    cover: "https://images2.alphacoders.com/851/thumb-1920-85182.jpg",
    title: "Inception",
  },
  {
    cover: "https://images6.alphacoders.com/875/thumb-1920-875570.jpg",
    title: "Blade Runner 2049",
  },
  {
    cover: "https://images6.alphacoders.com/114/thumb-1920-1141749.jpg",
    title: "Icon man 3",
  },
  {
    cover: "https://images2.alphacoders.com/631/thumb-1920-631095.jpg",
    title: "Steins Gate",
  },
  {
    cover: "https://images4.alphacoders.com/665/thumb-1920-665242.png",
    title: "One Punch Man",
  },
  {
    cover: "https://images2.alphacoders.com/738/thumb-1920-738176.png",
    title: "A Silent Voice",
  },
  {
    cover: "https://images8.alphacoders.com/100/thumb-1920-1005531.jpg",
    title: "Demon Slayer",
  },
  {
    cover: "https://images2.alphacoders.com/582/thumb-1920-582804.png",
    title: "Attack On Titan",
  },
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = React.useRef<StackedCarousel | undefined>();

  const handleSlideChange = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="bg-gray-100 flex justify-center flex-col gap-5 py-16">
      <h1 className="lg:text-5xl sm:text-4xl text-3xl text-black font-bold text-center mb-20">
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
                slideWidth={500}
                slideComponent={Card}
                maxVisibleSlide={5}
                currentVisibleSlide={currentVisibleSlide}
                onActiveSlideChange={handleSlideChange}
                useGrabCursor
              />
            );
          }}
        />

        {/* <div className="absolute cursor-pointer top-40 sm:left-40 left-10 z-30 flex justify-center items-center bg-white rounded-xl w-10 h-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => {
              if (ref.current) {
                ref.current?.goBack();
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
                ref.current?.goNext();
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
        </div> */}
      </div>

      <div className="flex justify-center mt-4 mb-20">
        {data.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
            // onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;

export function Pagination(props: { centerSlideDataIndex: number }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: 20,
      }}
    >
      {data.map((_, index) => {
        const isCenterSlide = props.centerSlideDataIndex === index;
        return (
          <div
            style={{
              height: 15,
              width: 15,
              borderRadius: "100%",
              background: isCenterSlide ? "black" : "none",
              border: "1px solid black",
            }}
          />
        );
      })}
    </div>
  );
}

export const Card = React.memo(function (props: {
  data: dataProps[];
  dataIndex: number;
}) {
  const { data, dataIndex } = props;
  const { cover } = data[dataIndex];
  return (
    <div
      style={{
        width: "100%",
        height: 300,
        userSelect: "none",
      }}
      className="my-slide-component"
    >
      <img
        style={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
          borderRadius: 0,
        }}
        draggable={false}
        src={cover}
      />
    </div>
  );
});
