import React from "react";

const GetInTouch = () => {
  return (
    <div>
      <div className="bg-base-100">
        <div className="container mx-auto">
          <div className="py-20 md:py-28 lg:py-32">
            <div className="text-center">
              <p className="text-sm text-neutral">What’s Next?</p>
              <h2 className="text-4xl md:text-6xl font-bold pb-8 pt-5 text-transparent bg-clip-text bg-gradient-to-r from-[#FFCD38] to-[#aca6a6]">
                Get In Touch
              </h2>
              <div className="w-10/12 md:w-8/12 xl:w-6/12 mx-auto pb-10">
                <p>
                  Although I’m not currently looking for any new opportunities,
                  if you have any new ideas or Freelance projects my inbox is
                  always open. Whether you have a question or just want to say
                  hi, I’ll try my best to get back to you!
                </p>
              </div>
              <button className="btn btn-outline btn-secondary normal-case text-sm btn-lg px-20">
                <a href="mailto:abdulalimemon11@gmail.com">Say Hello</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
