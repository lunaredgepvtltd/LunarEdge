import React from "react";
import NewLandingPage from "../components/NewLandingPage/NewLandingPage.jsx";
import CoreValues from "../components/CoreValueSection/CoreValues";
import NewGetInTouch from "../components/NewGetInTouch/NewGetInTouch.jsx";
import FirstPage from "../components/FirstPage/FirstPage.jsx";
import OurJourney from "../components/OurJourney/OurJourney.jsx";
import OurJourneyVidio from "../assets/OurJourneyVidio.mp4";
import OurMissionVidio from "../assets/OurMissionVidio.mp4";
import OurMission from "../components/OurMission/OurMission.jsx";
import OurVision from "../components/OurVision/OurVision.jsx";

import TransformingBusinessSection from "../components/TransformingBusinessSection/TransformingBusinessSection.jsx";
import HawaMahal from "../components/HawaMahal/HawaMahal.jsx";


const Hero2 = () => {
  return (
    <div className=" dark:bg-black bg-white">
      <FirstPage />
      <NewLandingPage /> 
      <HawaMahal />
      <OurJourney
        title="OUR JOURNEY"
        subtitle=" Established in 2024 with the goal “to create value through technology."
        content=" We will grow into a dynamic IT services company with expertise across various
          industries. Our team comprises talented professionals who bring
          diverse skills and a wealth of experience to the table, enabling us to
          offer a wide range of services tailored to your business needs."
        vidiotitle="Creating Value Through Technology"
        vidiosrc={OurJourneyVidio}
      />

      <CoreValues />
      <OurVision />

      <OurMission
        title="OUR MISSION"
        subtitle=" To empower businesses by delivering smart, innovative solutions that drive growth and success."
        vidiotitle="Delivering Smart and Innovative Solutions"
        vidiosrc={OurMissionVidio}
      />

      <TransformingBusinessSection/>
      <NewGetInTouch />
    
    </div>
  );
};

export default Hero2;
