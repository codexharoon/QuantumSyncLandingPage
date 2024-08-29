export interface BenefitCardProps {
  cover: string;
  title: string;
}

export function BenefitCard({ cover, title }: BenefitCardProps) {
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
