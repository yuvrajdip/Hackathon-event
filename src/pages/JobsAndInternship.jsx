import { Link } from "react-router-dom";

const JobsAndInternship = () => {
  return (
    <div>
      
      <div className="flex flex-col text-black m-10 space-y-10">
        <Link to="https://careerlab.mlh.io/partners/capitalone/" target="_blank">
          <div  data-aos="fade-down-right" data-aos-duration="1500" className="self-made-card bg-white rounded-md p-5 flex space-x-8">
            <img className="w-32" src="/public/assets/capital-one.svg" alt="" />
            <div>
              <p className="text-gray-400 text-lg font-bold">INTERN,FULL-TIME</p>
              <h2 className="text-2xl text-sky-500 font-medium">Capital One</h2>
              <p className="text-base">Capital One is more than just a bank, and way more than just a job. Their goal of bringing ingenuity, simplicity, and humanity to banking has become an essential part of their associates’ day-to-day work and they are interested in hiring hackers!</p>
            </div>
          </div>
        </Link>
        <Link to="https://careerlab.mlh.io/partners/ab-inbev/" target="_blank">
          <div  data-aos="fade-down-left" data-aos-duration="1500" className="self-made-card bg-white rounded-md p-5 flex space-x-8">
            <img className="w-32" src={`https://i.imgur.com/o6CNHip.png`} alt="" />
            <div>
              <p className="text-gray-400 text-lg font-bold">FULL-TIME</p>
              <h2 className="text-2xl text-sky-500 font-medium">AB InBev</h2>
              <p className="text-base">We’re always innovating - bringing us closer to consumers and communities around the world to drive busines growth. We’re leveraging new technologies to better engage with our consumers, partners, colleagues, and beer lovers around the world. We do this with an incredible team of passionate people united in a single purpose, to change the world with technology.</p>
            </div>
          </div>
        </Link>
        <Link to="https://careerlab.mlh.io/partners/avanade/">
          <div  data-aos="fade-down-right" data-aos-duration="1500" className="self-made-card bg-white rounded-md p-5 flex space-x-8">
            <img className="w-32" src={`https://i.imgur.com/dGNyhkc.png`} alt="" />
            <div>
              <p className="text-gray-400 text-lg font-bold">INTERN,FULL-TIME</p>
              <h2 className="text-2xl text-sky-500 font-medium">Avanade</h2>
              <p className="text-base">At Avanade, our vision is to advance the world through the power of people and Microsoft.

                Our purpose is to make a genuine human impact, for our clients and their customers, and our employees.

                We have a passion for technology and innovate with purpose. We deliver with excellence. We believe everyone counts.</p>
            </div>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default JobsAndInternship;