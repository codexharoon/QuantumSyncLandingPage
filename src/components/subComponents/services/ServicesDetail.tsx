import { useParams } from "react-router-dom";
import { data, dataProps } from "../../../data/ServicesData";
import Partnership from "../../Partnership";
import ContactUs from "../../ContactUs";

const ServicesDetail = () => {
  const { id } = useParams();

  if (!id) return;

  const detail = data.find((item: dataProps) => item.id === Number(id));

  if (!detail) return <h1>Service not found!</h1>;

  const { title, cover } = detail;
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

          <p className="lg:text-2xl text-xl pt-6 sevenLines">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nisi
            labore nam inventore et vel libero vero sunt nulla dolorum dolore
          </p>

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

      <Partnership />
      <ContactUs />
    </>
  );
};

export default ServicesDetail;
