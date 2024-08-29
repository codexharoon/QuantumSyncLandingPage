const Benefit2 = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center sm:pt-28 pt-12 sm:pb-14 pb-10 lg:px-0 px-6 relative">
      <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-start">
        How You Benefit
      </h1>

      <div className="flex flex-wrap flex-row xl:w-[96%] w-[90%] gap-6 justify-center pt-16">
        <Card
          cover="/benefit2/1.svg"
          title="Enhanced digital experiences for your customers across touchpoints"
        />

        <Card
          cover="/benefit2/2.svg"
          title="Increased operational efficiency and reduced costs"
        />

        <Card
          cover="/benefit2/3.svg"
          title="Improved business agility and faster time-to-market"
        />

        <Card
          cover="/benefit2/4.svg"
          title="Enhanced security and compliance"
        />
      </div>
    </section>
  );
};

export default Benefit2;

interface CardProps {
  cover: string;
  title: string;
}

function Card({ cover, title }: CardProps) {
  return (
    <div className="bg-gray-100 py-6 group hover:border hover:border-blue-300 hover:shadow-lg px-10  xl:w-[16%] lg:w-1/5 md:w-2/5 max-w-72 max-h-96 duration-300 hover:max-h-full w-full flex flex-col items-center shadow text-center">
      <img
        src={`${cover}`}
        className="w-full min-w-full h-auto object-cover"
        alt="benefit1 image"
      />
      <p className="text-xs pt-6 pb-6 overflow-hidden">{title}</p>
    </div>
  );
}
