const Solution = () => {
  return (
    <div className="w-full items-center justify-center bg-gray-100 py-16 xl:px-36 md:px-20 px-8">
      <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-start">
        Our Solutions
      </h1>

      <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-3 grid-cols-2 sm:gap-6 gap-4 pt-14 w-full">
        <Card
          cover="/acce/1.svg"
          title="Data Capture and Imaging"
          desc="Streamline the capture and extract important information in
                  one secure system"
        />
        <Card
          cover="/acce/2.svg"
          title="Data Entry and Processing"
          desc="Automate data entry and processing to improve accuracy and efficiency"
        />

        <Card
          cover="/acce/3.svg"
          title="Data Extraction and Validation"
          desc="Extract and validate data from various sources to ensure data quality"
        />

        <Card
          cover="/acce/4.svg"
          title="Data Integration and Transformation"
          desc="Integrate and transform data to make it accessible and usable"
        />

        <Card
          cover="/acce/5.svg"
          title="Data Analysis and Reporting"
          desc="Analyze data and generate reports to make informed decisions"
        />

        <Card
          cover="/acce/4.svg"
          title="Data Storage and Management"
          desc="Store and manage data securely to ensure data integrity"
        />
      </div>
    </div>
  );
};

export default Solution;

interface CardProps {
  cover: string;
  title: string;
  desc: string;
}

function Card({ cover, title, desc }: CardProps) {
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
