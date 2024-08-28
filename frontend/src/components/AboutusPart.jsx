import React from 'react'

export const AboutusPart = ({title,headline,content1,content2,sideImage}) => {
  return (
    <div>
      <div className="2xl:h-[600px] lg:h-[500px] md:h-[400px] lg:flex items-center">
        <div className="md:h-[450px] h-[530px] w-full md:flex md:justify-around px-3 md:px-0">
          <div className="lg:w-[40%] md:w-[46%] flex flex-col md:gap-4 gap-2 lg:text-base md:text-sm text-xs">
            <span className="text-[#2b1999]   flex items-center gap-1  ">
              {title}
            </span>
            <h3 className="xl:text-3xl md:text-2xl text-sm xl:font-semibold">
            {headline}
            </h3>
            <div className="flex flex-col gap-6 pr-4 h-[91%] text-justify ">
              {" "}
              <p>
                {content1}
              </p>
              <p className="hidden xl:block">
                {content2}
              </p>
            </div>
          </div>
          <img
            src={sideImage}
            alt=""
            className="sm:w-[26%] md:h-[75%] w-[75%] md:w-[28%] xl:h-auto mx-auto md:mx-0 md:mt-0 mt-8"
          />
        </div>
      </div>
    </div>
  )
}
