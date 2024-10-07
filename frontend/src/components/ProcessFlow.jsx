import React from "react";
import "./ProcessFlow.css";


const ProcessFlow = () => {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-center text-2xl font-light mb-8">
        A clean timeline design, with animated links
      </h2>
      <div className="timeline flex flex-col relative">

        {/* Timeline Event - Birthday */}
        <div className="timeline_event flex mb-8 items-center justify-center timeline_event--fadeInUp delay-3s">
          <div className="timeline_event_icon flex items-center justify-center bg-purple-200 p-6 rounded-full shadow-md relative mr-8">
            <i className="lni lni-cake text-3xl text-purple-600"></i>
          </div>
          <div className="timeline_event_content bg-white p-4 shadow-md rounded-lg w-1/2 relative">
            <div className="timeline_event_date bg-purple-600 text-white font-bold text-lg p-2 rounded-tl-md rounded-bl-md">
              20-08-2019
            </div>
            <div className="timeline_event_title text-purple-600 font-semibold uppercase text-lg mb-2">
              Birthday
            </div>
            <div className="timeline_event_description text-gray-600">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!</p>
            </div>
          </div>
        </div>

        {/* Timeline Event - Lunch */}
        <div className="timeline_event flex flex-row-reverse mb-8 items-center justify-center timeline_event--fadeInUp delay-2s">
          <div className="timeline_event_icon flex items-center justify-center bg-blue-200 p-6 rounded-full shadow-md relative ml-8">
            <i className="lni lni-burger text-3xl text-blue-600"></i>
          </div>
          <div className="timeline_event_content bg-white p-4 shadow-md rounded-lg w-1/2 relative">
            <div className="timeline_event_date bg-blue-600 text-white font-bold text-lg p-2 rounded-tr-md rounded-br-md">
              20-08-2019
            </div>
            <div className="timeline_event_title text-blue-600 font-semibold uppercase text-lg mb-2">
              Lunch
            </div>
            <div className="timeline_event_description text-gray-600">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!</p>
            </div>
          </div>
        </div>

        {/* Timeline Event - Exercise */}
        <div className="timeline_event flex mb-8 items-center justify-center timeline_event--fadeInUp delay-1s">
          <div className="timeline_event_icon flex items-center justify-center bg-green-200 p-6 rounded-full shadow-md relative mr-8">
            <i className="lni lni-slim text-3xl text-green-600"></i>
          </div>
          <div className="timeline_event_content bg-white p-4 shadow-md rounded-lg w-1/2 relative">
            <div className="timeline_event_date bg-green-600 text-white font-bold text-lg p-2 rounded-tl-md rounded-bl-md">
              20-08-2019
            </div>
            <div className="timeline_event_title text-green-600 font-semibold uppercase text-lg mb-2">
              Exercise
            </div>
            <div className="timeline_event_description text-gray-600">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!</p>
            </div>
          </div>
        </div>

        {/* Timeline Event - Birthday */}
        <div className="timeline_event flex flex-row-reverse mb-8 items-center justify-center timeline_event--fadeInUp">
          <div className="timeline_event_icon flex items-center justify-center bg-pink-200 p-6 rounded-full shadow-md relative ml-8">
            <i className="lni lni-cake text-3xl text-pink-600"></i>
          </div>
          <div className="timeline_event_content bg-white p-4 shadow-md rounded-lg w-1/2 relative">
            <div className="timeline_event_date bg-pink-600 text-white font-bold text-lg p-2 rounded-tr-md rounded-br-md">
              20-08-2019
            </div>
            <div className="timeline_event_title text-pink-600 font-semibold uppercase text-lg mb-2">
              Birthday
            </div>
            <div className="timeline_event_description text-gray-600">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProcessFlow;
