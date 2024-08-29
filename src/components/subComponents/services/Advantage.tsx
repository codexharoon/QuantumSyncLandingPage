const Advantage = () => {
  return (
    <section className="w-full bg-gray-100 flex flex-col justify-center md:px-0 px-4 py-20 items-center">
      <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl sm:text-start w-full xl:pl-36 md:pl-16 sm:pl-10">
        QuantumSync Advantage
      </h1>

      <div className="transition-all duration-300 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 xl:w-4/5 w-[90%] max-h-min justify-center pt-16">
        <Card
          cover="/advantage/1.svg"
          title="End-to-end portfolio of product engineering services"
        />

        <Card
          cover="/advantage/2.svg"
          title="Modern technologies and reference architectures"
        />

        <Card
          cover="/advantage/3.svg"
          title="Subject matter experts (SMEs) across various industry domains, technology platforms, and tools"
        />

        <Card
          cover="/advantage/4.svg"
          title="Reusable assets and in-house developed frameworks to accelerate application development"
        />

        <Card
          cover="/advantage/5.svg"
          title="Flexible engagement and financial models"
        />

        <Card
          cover="/advantage/6.svg"
          title="Long-term industry partnerships which help in engineering transformation solutions"
        />

        <Card
          cover="/advantage/7.svg"
          title="All-inclusive process automation to manage application development"
        />

        <Card
          cover="/advantage/8.svg"
          title="Governance models to administer the entire application lifecycle"
        />
      </div>
    </section>
  );
};

export default Advantage;

interface CardProps {
  cover: string;
  title: string;
  shortDesc?: string;
}

function Card({ cover, title }: CardProps) {
  return (
    <div className="bg-white group group-hover:border-2 group-hover:border-blue group-hover:shadow-xl max-h-96 duration-300 hover:max-h-full text-myBlack px-4 py-6 flex flex-col items-center text-center">
      <img
        src={`${cover}`}
        alt="advanatge image"
        className="w-8/12 h-auto object-cover mt-2"
      />
      <h1 className="pt-4 font-semibold text-xl">{title}</h1>
      <p className="pt-2 text-sm overflow-hidden"></p>
    </div>
  );
}
