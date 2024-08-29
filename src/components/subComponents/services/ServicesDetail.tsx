import { useParams } from "react-router-dom";
import { data, dataProps } from "../../../data/ServicesData";
import Partnership from "../../Partnership";
import ContactUs from "../../ContactUs";
import Advantage from "./Advantage";
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

  const { title, cover, shortDesc, longDesc, offering } = detail;

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
          {/* overflow-y-scroll no-scrollbar */}
          <div className="flex flex-row overflow-x-auto gap-x-6 pt-12 w-auto   pb-4">
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

      {title === "Digital Application Services" ||
        (title === "Quality Engineering Services" && (
          <>
            <Advantage />
            <Benefit1 />
          </>
        ))}

      {title === "UI/XM Services" && <Benefit2 />}

      {title === "Enterprise Content Management" && (
        <>
          <Solution />
          <Accelerator />
        </>
      )}

      <Partnership />
      <TeamLeadership />
      <ContactUs />
    </>
  );
};

export default ServicesDetail;
