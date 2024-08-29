export interface SolutionCardProps {
  cover: string;
  title: string;
  desc: string;
}

export function SolutionCard({ cover, title, desc }: SolutionCardProps) {
  return (
    <div className="items-center justify-center flex h-44 shadow-lg md:p-0 relative">
      <img
        src={`${cover}`}
        alt=""
        className="w-full min-w-full h-full object-cover"
      />

      <div className="w-full h-full bg-black/30 absolute flex flex-col justify-center items-center top-0 left-0">
        <div className="w-full h-full min-h-full flex flex-col group overflow-hidden text-white">
          <div className="w-full h-full min-h-full flex flex-col justify-center items-center text-xl font-medium duration-300 group-hover:translate-y-[-100%] group-hover:backdrop-blur-sm">
            {title}
          </div>

          <div className="w-full h-full min-h-full flex-col justify-center items-center flex duration-300 p-5 overflow-auto scrollbar-thin group-hover:translate-y-[-100%] group-hover:!bg-black/10 group-hover:backdrop-blur-sm">
            <span className="w-full h-full">{desc}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
