import { useParams } from "react-router-dom";
import { data, dataProps } from "../../../data/ServicesData";
import Partnership from "../../Partnership";
import ContactUs from "../../ContactUs";
import { Card } from "./cards/Advantage";
import Benefit1 from "./Benefit1";
import { useState } from "react";
import Benefit2 from "./Benefit2";
import Accelerator from "./Accelerator";
import Solution from "./Solution";
import TeamLeadership from "./TeamLeadership";

const ServicesDetail = () => {
  const { id } = useParams();

  const detail = data.find(
    (item: dataProps) => item.id === Number(id)
  ) as dataProps;

  const {
    title,
    cover,
    shortDesc,
    longDesc,
    offering,
    advantage,
    accelerator,
  } = detail;

  const [pText, setPText] = useState<string>(offering?.[0].desc ?? "");
  const [active, setActive] = useState<string>(offering?.[0].title ?? "");

  if (!detail)
    return <h1 className="text-4xl text-center">Service not found!</h1>;

  return (
    <>
      <section className="w-full items-center justify-center flex md:flex-row flex-col lg:px-0 px-6 py-16 bg-gray-100 relative">
        <img
          src="/services-detail.svg"
          alt=""
          width={530}
          height={652}
          className="absolute top-0 left-0 md:block hidden"
        />

        <div className="md:w-1/2 w-full text-black text-start xl:pl-40 lg:pl-20 z-40">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-start">
            {title}
          </h1>

          {shortDesc && (
            <p className="lg:text-2xl text-xl pt-6 sevenLines">{shortDesc}</p>
          )}

          <a href="" className="w-fit">
            <button
              className="bg-blue-600 text-white flex items-center justify-center gap-x-2 text-lg 
                py-3 rounded-full px-8 mt-6"
            >
              Explore all Positions
              <img src="/arrow.svg" alt="open" className="fill-current" />
            </button>
          </a>
        </div>

        <div className="md:w-1/2 w-full flex items-center justify-end md:pt-0 pt-6">
          <img
            src={cover}
            alt={`${title}- image`}
            height={300}
            width={500}
            className=" my-28 rounded-s-full object-cover"
          />
        </div>
      </section>

      {longDesc?.desc && (
        <div className="flex flex-row-reverse text-lg w-full items-center justify-center bg-gray-100 py-16 xl:px-36 md:px-20 px-8">
          <span className="flex flex-1 ml-10">{longDesc.desc}</span>
          {longDesc.cover && (
            <img
              src={`${longDesc.cover}`}
              className="flex flex-[0] w-full max-w-72 h-auto"
            />
          )}
        </div>
      )}

      {!!offering?.length && (
        <section className="w-full items-center justify-center bg-gray-100 py-16 xl:pl-40 md:pl-20 pl-8">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-start">
            Our Service Offering
          </h1>

          <div className="flex flex-row overflow-x-auto gap-x-6 pt-12 w-auto overflow-y-scroll no-scrollbar pb-4">
            {offering?.map((item, index) => (
              <div
                key={index}
                className={`flex whitespace-nowrap border border-black rounded-full gap-x-4 px-4 py-2 outline-none 
                             ${
                               item.title === active
                                 ? "bg-blue-600 text-white"
                                 : "text-black bg-gray-100"
                             }`}
              >
                <button
                  className="text-lg font-semibold outline-none uppercase"
                  onClick={() => {
                    setPText(item.desc);
                    setActive(item.title);
                  }}
                >
                  {item.title}
                </button>
              </div>
            ))}
          </div>
          <div className="bg-white md:p-8 p-4 mt-8 md:w-[90%] w-[96%]">
            <p className="md:text-lg text-bases">{pText}</p>
          </div>
        </section>
      )}

      {advantage && (
        <section className="w-full bg-gray-100 flex flex-col justify-center md:px-0 px-4 py-20 items-center">
          <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl sm:text-start w-full xl:pl-36 md:pl-16 sm:pl-10">
            QuantumSync Advantage
          </h1>

          <div className="transition-all duration-300 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 xl:w-4/5 w-[90%] max-h-min justify-center pt-16">
            {advantage.map((item, index) => (
              <Card key={index} cover={item.cover} title={item.title} />
            ))}
          </div>
        </section>
      )}

      {title === "Digital Application Services" ||
        title === "Digital Atelier" ||
        (title === "Quality Engineering Services" && (
          <>
            <Benefit1 />
          </>
        ))}

      {title === "UI/XM Services" && <Benefit2 />}

      {title === "Enterprise Content Management" && <Solution />}

      {accelerator && (
        <Accelerator
          card1={accelerator.card1}
          card2={accelerator.card2}
          card3={accelerator.card3}
          card4={accelerator.card4}
          card5={accelerator.card5}
        />
      )}

      <Partnership />
      <TeamLeadership />
      <ContactUs />
    </>
  );
};

export default ServicesDetail;
