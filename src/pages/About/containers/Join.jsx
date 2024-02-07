import React from "react";

const Join = () => {
  return (
    <div className="p-12 lg:p-8 bg-white rounded-lg  flex xs:block gap-4 justify-between items-center">
      <div>
        <h2 className="text-4xl mb-4 font-semibold lg:text-2l md:text-xl">
          <span className="text-[#FF9500]">Together</span>, let's shape the
          future of digital innovation
        </h2>
        <p>
          Join us on this exciting learning journey and unlock your potential in
          design and development.
        </p>
      </div>
      <button className="px-4 shrink-0 xs:mt-4 py-2 md:px-3 md:py-2 md:text-sm rounded-lg bg-[#FF9500] text-white">
        Join Now
      </button>
    </div>
  );
};

export default Join;
