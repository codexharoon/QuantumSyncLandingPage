import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    company: "",
    message: "",
    recaptcha: "",
  });

  const handleRecaptchaChange = (value: string | null) => {
    setFormData({
      ...formData,
      recaptcha: value || "", // Update reCAPTCHA value
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    if (formData.recaptcha === "") {
      alert("Please verify that you're not a robot.");
      return;
    } else {
      alert("Form submitted successfully!");
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        company: "",
        message: "",
        recaptcha: "",
      });
    }
  };

  return (
    <section className="flex justify-center items-center w-full min-h-screen sm:py-10 bg-gray-100">
      <div className="max-w-7xl lg:w-4/5 w-[90%] items-centers justify-center flex md:flex-row flex-col-reverse md:py-0 py-14">
        <div className="md:w-3/5 w-full md:pt-0 pt-10">
          <img
            src="/contact.png"
            alt="contact us image"
            height={1000}
            width={1000}
            className="h-full w-full object-cover"
          />
        </div>

        <form
          className="md:w-3/5 w-full z-20 bg-white text-black lg:px-16 sm:px-10 px-4 py-6 rounded-tl-[60px] md:-ml-20"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl font-bold">
            Explore Our Services: Feasibility Studies, Workshops, Pilots, and
            Ideation.
          </h1>
          <div className="flex sm:flex-row flex-col items-center gap-x-4">
            <div className="flex flex-col w-full mt-4">
              <p className="font-medium text-base">First Name</p>
              <input
                required
                type="text"
                id="firstname"
                placeholder="First Name"
                className="rounded-md bg-gray-100 font-medium outline-none text-base py-2 px-3 w-full mt-1"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col w-full mt-4">
              <p className="font-medium text-base">Last Name</p>
              <input
                required
                type="text"
                id="lastname"
                placeholder="Last Name"
                className="rounded-md bg-gray-100 font-medium outline-none text-base py-2 px-3 w-full mt-1"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col w-full mt-4">
            <p className="font-medium text-base">Work Email</p>
            <input
              required
              type="email"
              id="email"
              placeholder="Email Address"
              className="rounded-md bg-gray-100 font-medium outline-none text-base py-2 px-3 w-full mt-1"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col w-full mt-4">
            <p className="font-medium text-base">Company</p>
            <input
              required
              type="text"
              id="company"
              placeholder="Company Name"
              className="rounded-md bg-gray-100 font-medium outline-none text-base py-2 px-3 w-full mt-1"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col w-full mt-4">
            <p className="font-medium text-base">Message</p>
            <textarea
              name="message"
              id="message"
              placeholder="Write Message"
              rows={3}
              className="rounded-md bg-gray-100 font-medium outline-none text-base py-2 px-3 w-full mt-1"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div className="mt-6">
            <ReCAPTCHA
              sitekey="6Le6yiUqAAAAABWLEP6T9TFJTsD4Z1HeLWULmLwP"
              onChange={handleRecaptchaChange}
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-blue-500 text-white text-lg py-3 mt-6"
          >
            Request Consultation
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
