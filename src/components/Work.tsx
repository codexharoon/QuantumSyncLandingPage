interface workDataProps {
  heading: string;
  description: string;
  link: string;
}

const workData: workDataProps[] = [
  {
    heading: "E-commerce",
    description:
      "Our e-commerce solutions empower businesses to sell products online with ease, offering seamless shopping experiences.",
    link: "#",
  },
  {
    heading: "Education",
    description:
      "We provide innovative educational platforms that enhance learning experiences and offer a wide range of resources for students.",
    link: "#",
  },
  {
    heading: "Finance",
    description:
      "Our finance solutions help you manage your finances efficiently, providing tools for budgeting, investing, and more.",
    link: "#",
  },
  {
    heading: "Real Estate",
    description:
      "We deliver real estate solutions that simplify property management, buying, and selling, making real estate transactions smoother.",
    link: "#",
  },
  {
    heading: "Travel",
    description:
      "Our travel solutions provide tools and resources to plan, book, and enjoy trips, ensuring a hassle-free travel experience.",
    link: "#",
  },
  {
    heading: "Marketing",
    description:
      "We offer marketing solutions that boost your brand's visibility and help you reach your target audience effectively.",
    link: "#",
  },
  {
    heading: "Logistics",
    description:
      "Our logistics solutions streamline supply chain management, ensuring timely and efficient delivery of goods.",
    link: "#",
  },
  {
    heading: "Entertainment",
    description:
      "We create entertainment platforms that engage users with a wide range of content, from streaming services to interactive media.",
    link: "#",
  },
  {
    heading: "Automotive",
    description:
      "Our automotive solutions enhance vehicle management and offer innovative tools for car dealerships and service providers.",
    link: "#",
  },
  {
    heading: "Hospitality",
    description:
      "We provide hospitality solutions that improve guest experiences and streamline hotel management operations.",
    link: "#",
  },
];

const Work = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center md:py-16 py-8 px-8">
      <h1 className="text-center font-bold text-xl sm:text-2xl lg:text-4xl ">
        Industries we work with
      </h1>

      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 xl:w-[84%] w-[90%] md:pt-20 pt-10 gap-6">
        {workData.map((work, i) => (
          <div
            key={i}
            className="border-2 border-blueWhite group hover:border-blue-200 p-4 flex flex-col justify-between "
          >
            <div className="pb-6">
              <h1 className="pt-2 font-bold text-lg">{work.heading}</h1>
              <p className="fiveLines pt-2 text-sm">{work.description}</p>
            </div>

            <a
              href={work.link}
              className="group-hover:text-blue-500 w-fit font-semibold text-sm flex flex-row items-center gap-x-2 cursor-pointer"
            >
              Learn More <span className="text-xl font-bold s">&rarr;</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
