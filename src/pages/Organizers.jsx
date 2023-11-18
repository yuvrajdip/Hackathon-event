
const Organizers = () => {
  return (
    <div className="h-screen">
      <p className="text-center text-3xl my-5">Hackthon Members Benefits</p>
      <div className="">

        <div className="h-3/6 flex items-center justify-around gap-x-5">

          <div data-aos="fade-up" data-aos-duration="1500" className="card w-96 h-full bg-gray-300 text-black shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Community</h2>
              <p>Join a global community of organizers who are passionate about empowering hackers though hackathons. Your team will receive discounted tickets to Hackcon, our annual conference for hackathon organizers. You’ll also be able to share some of the local hacker initiatives you’ve been working on through our monthly newsletter and MLH Community Discord.</p>
            </div>
          </div>

          <div data-aos="fade-down" data-aos-duration="1500" className="card w-96 h-full bg-gray-300 text-black shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Pre-Event Support</h2>
              <p>Our team of Hackathon Community managers advises over 250 hackathons on planning their event every year. We provide a variety of resources leading up to your event that include our Organizer Guide, regular advice calls, and much more. You can tap into the MLH team's expert advice and mentorship when you need it.</p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration="1500" className="card w-96 h-full bg-gray-300 text-black shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Day-of Benefits</h2>
              <p>Our team will be there at your event to support your team and make sure it is extra special for hackers. We will help your event run smoothly as well as provide event resources like hardware and prizes.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Organizers;