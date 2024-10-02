import React from "react";
import NewLandingPage from "../components/NewLandingPage";
import CoreValues from "../components/CoreValueSection/CoreValues";
import NewGetInTouch from "../components/NewGetInTouch";
import FirstPage from "../components/FirstPage";
import HawaMahal from "../components/HawaMahal";
import OurJourney from "../components/OurJourney";
import OurJourneyVidio from "../assets/OurJourneyVidio.mp4";

import OurMissionVidio from "../assets/OurMissionVidio.mp4";
import OurMission from "../components/OurMission";
import OurVision from "../components/OurVision";
import TimeLine from "../components/TimeLine";


const Hero2 = () => {
  return (
    <div>
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

      {/* <TransformingBusinessSection/> */}
      <NewGetInTouch />
      <TimeLine/>
    </div>
  );
};

export default Hero2;
