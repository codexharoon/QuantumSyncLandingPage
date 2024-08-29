export interface AdvantageCardProps {
  cover: string;
  title: string;
  shortDesc?: string;
}

export function AdvantageCard({ cover, title }: AdvantageCardProps) {
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
