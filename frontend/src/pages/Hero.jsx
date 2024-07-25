import React from 'react';
import Lottie from 'lottie-react';
import computer from '../assets/computer.json';
import Offer from '../components/Offer';

const Hero = () => {

  const [showForm, setShowForm] = useState(false);

  const openForm = () => {
    setShowForm(true);
   };

   const closeForm = () => {
   setShowForm(false);
   };


  //  handleGetConnect 

   const handleButton = ()=>{
    setShowForm(true)
  }


  // ANNIMATION 

  const [text, setText] = useState('');
  const phrase = "LunarEdge";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= phrase.length) {
        setText(phrase.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100); // Adjust typing speed here (200ms per character)
    
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures effect runs only once


  return (
    <div className="w-full h-full">

      {/* first-part  */}
 
        <div className='w-full h-[1000px] bg-cover flex justify-around items-center bg-[#9ad7e2]'>
     
        {/* left content   */}
         <div className='flex flex-col gap-6 w-96 ml-72'>
          <p className='text-7xl'>LunarEdge</p>
          <p className='text-md text-[#424141] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quis harum non eos facilis architecto, iste aperiam eius, necessitatibus est, soluta officia neque sint inventore hic in voluptatum accusantium. Voluptatibus!</p>
          <div className='mt-24'>
            <button className='bg-black rounded-full p-3 text-white text-md'>Get connect with us</button>
          </div>
        </div>

        {/* right gif  */}

        <div className="flex justify-end items-end ml-40 mt-20">
          <Lottie animationData={computer} />
        </div>
      </div>

      {/* second-part  */}

      <div className="w-full h-full ">
        <div className="w-full text-center pt-28">
          
          <div className="flex justify-between" >
          <video class="main-video resource-retina" src={robotreverse} type="video/mp4" width="408" height="408" loop="true" autoplay="true" muted="true" playsinline="true"></video>
          <div className="flex flex-col gap-5">
          <h1 className="text-5xl font-medium">Services We Offer</h1>
          <p className="text-lg text-slate-500 my-3 py-2">
            LunarEdge is the perfect choice for any buisness looking to digitize
            it's operations. We offers a wide range of on time <br></br> and
            cost effective services that will help solve your complex problems
            with IT solutions.
          </p></div>
          <video class="main-video resource-retina" src={robot} type="video/mp4" width="408" height="408" loop="true" autoplay="true" muted="true" playsinline="true"></video>
          
          </div>
        </div>

        {/* what we offers boxes  */}
        <div className="flex justify-center items-center ">
          <div className="grid grid-cols-1 grid-col-9 md:grid-cols-3 md:grid-rows-3 gap-4 ">
            <Offer
              service={"Mobile App Development"}
              content={
                "Creating intuitive mobile applications for iOS and Android platforms that deliver seamless user experiences."
              }
            />

            <Offer
              service={"Web Development"}
              content={
                "Crafting engaging and user-friendly websites that enhance your online presence and drive customer engagement."
              }
            />

            <Offer
              service={"Game Development"}
              content={
                "Immerse your audience in captivating virtual worlds with Lunaredge Pvt. Ltd. game development expertise."
              }
            />

            <Offer
              service={"IT Consulting"}
              content={
                "Expert guidance and strategic advice to optimize your IT infrastructure and achieve operational excellence."
              }
            />

            <Offer
              service={"Cloud Solutions"}
              content={
                "Harnessing the power of cloud technology to improve scalability, security, and efficiency in your business operations."
              }
            />

            <Offer
              service={"Cybersecurity Services"}
              content={
                "Protecting your digital assets with robust cybersecurity measures and proactive threat detection."
              }
            />

            <Offer
              service={"Banking and Financial Services"}
              content={
                "Providing tailored IT solutions for banking and financial institutions, including core banking systems,loan management system, mobile banking apps"
              }
            />

            <Offer
              service={"Ai and Machine learning Solutions"}
              content={
                "Harness the power of artificial intelligence and machine learning with Lunaredge Pvt. Ltd. Our advanced AI solutions are designed to revolutionize."
              }
            />

          <Offer service={'Agriculture Technology Solutions'} content={'Innovating agriculture processes with smart technology solutions such as precision farming, crop monitoring systems, and agricultural data analytics.'}/>
</div>
       </div>
      </div>
      
    </div>
  );
};

export default Hero;



