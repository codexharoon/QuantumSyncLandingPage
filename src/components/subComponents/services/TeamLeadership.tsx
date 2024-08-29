const TeamLeadership = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center sm:pt-28 pt-12 sm:pb-20 pb-10 lg:px-0 px-6 relative">
      <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-start">
        Team Leadership
      </h1>

      <div className="flex flex-wrap flex-row xl:w-4/5 w-[90%] gap-8 justify-center pt-16">
        <Card
          name="Muhammad Haroon"
          title="Chief Executive Officer (CEO)"
          cover="/avatar.png"
        />

        <Card
          name="Muhammad Haroon"
          title="Chief Operation Officer (COO)"
          cover="/avatar.png"
        />
      </div>
    </section>
  );
};

export default TeamLeadership;

interface CardProps {
  cover: string;
  name: string;
  title: string;
  link?: string;
}

function Card({ cover, name, title }: CardProps) {
  return (
    <div className="lg:w-1/4 md:w-2/5 max-w-72 pb-4 w-full flex flex-col items-center shadow text-center rounded-t-full overflow-hidden">
      <img
        src={`${cover}`}
        alt="team picture"
        className="h-72 w-72 rounded-full object-cover"
      />
      <h1 className="text-xl pt-4 text-[#132745] font-bold">{name}</h1>
      <p className="text-base pt-2 pb-2">{title}</p>
      <img src="/linkedin.svg" alt="social media image" />
    </div>
  );
}
