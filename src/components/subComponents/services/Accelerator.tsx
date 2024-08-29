type CardProps = {
  cover: string;
  title: string;
  desc?: string;
};

interface AcceleratorProps {
  card1: CardProps;
  card2: CardProps;
  card3: CardProps;
  card4: CardProps;
  card5: CardProps;
}

const Accelerator = ({
  card1,
  card2,
  card3,
  card4,
  card5,
}: AcceleratorProps) => {
  return (
    <div className="w-full items-center justify-center bg-gray-100 py-16 xl:px-36 md:px-20 px-8">
      <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-start">
        Our Accelerators
      </h1>

      <div className="w-full flex flex-col space-y-7 mt-14">
        <div className="w-full flex flex-col gap-6 xl:gap-8 md:flex-row">
          <div className="flex flex-[0.16] md:flex-[0.23]">
            <img src={`${card1.cover}`} alt="" />
          </div>

          <div className="flex flex-[0.8] flex-col w-full justify-center space-y-3">
            <div className="text-xl font-medium">{card1.title}</div>

            <div className="w-full">
              {card1.desc ||
                `Our comprehensive content automation solutions simplify and
              streamline the expensive, time-consuming, and error-prone tasks
              associated with creating and managing documents between front and
              back-office staff. Our solution accelerator is engineered and
              tested to function effectively across multiple devices,
              departments, and geographic locations, supporting hundreds of
              business entities and thousands of users.`}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-6 xl:gap-8 md:flex-row-reverse">
        <div className="flex flex-[0.16] md:flex-[0.23]">
          <img src={`${card2.cover}`} alt="" />
        </div>

        <div className="flex flex-[0.8] flex-col w-full justify-center space-y-3">
          <div className="text-xl font-medium">{card2.title}</div>

          <div className="w-full">
            {card2.desc ||
              `Our comprehensive content automation solutions simplify and
              streamline the expensive, time-consuming, and error-prone tasks
              associated with creating and managing documents between front and
              back-office staff. Our solution accelerator is engineered and
              tested to function effectively across multiple devices,
              departments, and geographic locations, supporting hundreds of
              business entities and thousands of users.`}
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col space-y-7 mt-14">
        <div className="w-full flex flex-col gap-6 xl:gap-8 md:flex-row">
          <div className="flex flex-[0.16] md:flex-[0.23]">
            <img src={`${card3.cover}`} alt="" />
          </div>

          <div className="flex flex-[0.8] flex-col w-full justify-center space-y-3">
            <div className="text-xl font-medium">{card3.title}</div>

            <div className="w-full">
              {card3.desc ||
                `Our comprehensive content automation solutions simplify and
              streamline the expensive, time-consuming, and error-prone tasks
              associated with creating and managing documents between front and
              back-office staff. Our solution accelerator is engineered and
              tested to function effectively across multiple devices,
              departments, and geographic locations, supporting hundreds of
              business entities and thousands of users.`}
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-6 xl:gap-8 md:flex-row-reverse">
          <div className="flex flex-[0.16] md:flex-[0.23]">
            <img src={`${card4.cover}`} alt="" />
          </div>

          <div className="flex flex-[0.8] flex-col w-full justify-center space-y-3">
            <div className="text-xl font-medium">{card4.title}</div>

            <div className="w-full">
              {card4.desc ||
                `Our comprehensive content automation solutions simplify and
              streamline the expensive, time-consuming, and error-prone tasks
              associated with creating and managing documents between front and
              back-office staff. Our solution accelerator is engineered and
              tested to function effectively across multiple devices,
              departments, and geographic locations, supporting hundreds of
              business entities and thousands of users.`}
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col space-y-7 mt-14">
          <div className="w-full flex flex-col gap-6 xl:gap-8 md:flex-row">
            <div className="flex flex-[0.16] md:flex-[0.23]">
              <img src={`${card5.cover}`} alt="" />
            </div>

            <div className="flex flex-[0.8] flex-col w-full justify-center space-y-3">
              <div className="text-xl font-medium">{card5.title}</div>

              <div className="w-full">
                {card5.desc ||
                  `Our comprehensive content automation solutions simplify and
              streamline the expensive, time-consuming, and error-prone tasks
              associated with creating and managing documents between front and
              back-office staff. Our solution accelerator is engineered and
              tested to function effectively across multiple devices,
              departments, and geographic locations, supporting hundreds of
              business entities and thousands of users.`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accelerator;
