const FirstSection = () => {
  return (
    <section
      className="flex sm:flex-row flex-col items-center w-full py-3 bg-[#202430] text-white justify-between
       xl:px-44 lg:px-20 px-8"
    >
      <div className="flex min-[570px]:flex-row flex-col items-center text-sm gap-4">
        <div className="flex flex-row items-center gap-x-2">
          <img
            src="
              /location.svg"
            alt="location"
          />
          <p>1640 Boro Place 4th Flr, McLean, 22102</p>
        </div>
        <div className="flex flex-row items-center gap-x-2 hover:underline">
          <img src="/mail.svg" alt="mail" />
          <a href="mailto:contact@quantumsync.net">contact@quantumsync.net</a>
        </div>
      </div>
      <div className="flex flex-row items-center gap-x-4 sm:pt-0 pt-4">
        <a
          href=""
          className="cursor-pointer hover:scale-125 transition-all transform duration-300"
        >
          <img src="/insta.svg" alt="instagram" />
        </a>
        <a
          href=""
          className="cursor-pointer hover:scale-125 transition-all transform duration-300"
        >
          <img src="/fb.svg" alt="facebook" />
        </a>
        <a
          href=""
          className="cursor-pointer hover:scale-125 transition-all transform duration-300"
        >
          <img src="/x.svg" alt="X (Twitter)" />
        </a>
      </div>
    </section>
  );
};

export default FirstSection;
