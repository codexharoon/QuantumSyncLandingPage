const ExploreSection = () => {
  return (
    <section className="w-full flex min-[780px]:flex-row flex-col items-center justify-center sm:pt-28 pt-12 sm:pb-20 pb-10 lg:px-0 px-6 relative">
      <img
        src="/explore.svg"
        alt=""
        width={443}
        height={606}
        className="absolute top-0 right-0 md:block hidden"
      />

      <div className="min-[780px]:w-1/2 w-full flex flex-col justify-center items-start xl:pl-40 lg:pl-16 pl-0 min-[780px]:pr-20 pr-6 z-20">
        <h1 className="md:text-4xl text-3xl font-semibold text-myBlack min-[780px]:sw-4/5 w-full">
          Join Our Team at Quantum Sync
        </h1>

        <p className="text-base text-myBlack pt-4 pb-6">
          Join Quantum Sync and collaborate with top tech experts. Innovate,
          analyze, and deliver in a dynamic, results-driven environment. If
          you're innovative, curious, and have strong analytical skills and deep
          technological expertise, advance your career with us.
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

      <div className="min-[780px]:w-1/2 w-full flex xl:pl-20 min-[780px]:pt-0 pt-10 z-20 min-[780px]:justify-start justify-center">
        <img
          src="/explore.png"
          alt="explore image"
          height={1000}
          width={1000}
          className="sm:h-96 h-72 lg:w-auto w-96"
        />
      </div>
    </section>
  );
};

export default ExploreSection;
