import React from "react";

const ContactForm = () => {
  const handleMessage = (e) => {
    e.preventDefault();
    e.target.form.reset();
    alert("Your Message Successfully Sent!");
  };
  return (
    <form className="flex w-full ">
      <div className="w-[90%] sm:w-full sm:mb-6">
        <div className="grid grid-cols-2 gap-10 md:gap-6 sm:gap-4">
          <label>
            First Name
            <input
              type="text"
              placeholder="Enter First Name"
              className="block mt-2 w-full p-2 border rounded-md"
            />
          </label>
          <label>
            Last Name
            <input
              type="text"
              placeholder="Enter Last Name"
              className="block mt-2 w-full p-2 border rounded-md"
            />
          </label>
          <label>
            Email
            <input
              type="text"
              placeholder="Enter Your Email"
              className="block mt-2 w-full p-2 border rounded-md"
            />
          </label>
          <label>
            Phone
            <input
              type="number"
              placeholder="Enter Phone Number"
              className="block mt-2 w-full p-2 border rounded-md"
            />
          </label>
        </div>
        <label className="block mt-10 md:mt-6 sm:mt-4">
          Subject
          <input
            type="text"
            placeholder="Enter Your Subject"
            className="block mt-2 w-full p-2 border rounded-md"
          />
        </label>
        <label className="block mt-10 md:mt-6 sm:mt-4">
          Message
          <textarea
            type="text"
            placeholder="Enter Your Message"
            className="block resize-none mt-2 w-full p-2 border rounded-md"
          />
        </label>
        <button
          onClick={handleMessage}
          className="text-white block mx-auto mt-4 px-4 py-2 rounded-md bg-[#FF9500]"
        >
          Send Your Message
        </button>
      </div>
      <div></div>
    </form>
  );
};

export default ContactForm;
