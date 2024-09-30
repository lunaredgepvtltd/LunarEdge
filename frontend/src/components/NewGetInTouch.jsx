import React from 'react'

const NewGetInTouch = () => {
  return (
    <>
    <div className="bg-white p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex justify-center items-center lg:pl-20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241201.8443352571!2d75.74948445094843!3d26.882945649020046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db50072a7f755%3A0x19a18bdba8efd3cf!2sLunarEdge%20IT%20Services%20Private%20Limited!5e0!3m2!1sen!2sus!4v1630929534187!5m2!1sen!2sus&z=18.15"
              width="90%"
              height="500"
              loading="lazy"
              allowFullScreen
              title="Company Location"
              className="rounded-lg shadow-md h-64 md:h-96 lg:h-[500px]"
            ></iframe>
          </div>

          <div className="flex flex-col items-center">
            <h1 className="text-2xl text-bold text-black mb-2">
              How we can Help You?
            </h1>
            <h2 className="text-3xl font-bold text-black mb-8 tracking-wider">
              CONTACT US
            </h2>

            <div className="bg-gradient-to-r from-[#ff66c4] to-[#ffde59] border rounded-[50px] p-[40px]">
              <form className="space-y-4 mx--w-md">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="p-3 border rounded-3xl w-full placeholder:text-center focus:outline-none focus:border-[#ff66c4] transition duration-300"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="p-3 border rounded-3xl w-full placeholder:text-center focus:outline-none focus:border-[#ff66c4] transition duration-300"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="p-3 border rounded-3xl w-full placeholder:text-center focus:outline-none focus:border-[#ff66c4] transition duration-300"
                  />
                  <input
                    type="text"
                    placeholder="Job Title"
                    className="p-3 border rounded-3xl w-full placeholder:text-center focus:outline-none focus:border-[#ff66c4] transition duration-300"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Organization Name"
                    className="p-3 border rounded-3xl w-full placeholder:text-center focus:outline-none focus:border-[#ff66c4] transition duration-300"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="p-3 border rounded-3xl w-full placeholder:text-center focus:outline-none focus:border-[#ff66c4] transition duration-300"
                  />
                </div>
                <textarea
                  placeholder="Your Message"
                  className="p-3 border rounded-3xl w-full placeholder:text-center focus:outline-none focus:border-[#ff66c4] transition duration-300"
                ></textarea>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="text-center bg-gradient-to-r from-[#ff5757] to-[#8c52ff] text-white py-3 px-6 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewGetInTouch