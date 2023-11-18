import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const SingleData = ({ d }) => {
  const { blogImg, blogTitle, blogUpdateTime, blogId } = d;

  return (
    <div data-aos-duration="2000" data-aos="fade-up-right" className="flex w-3/4 mx-auto mb-10 bg-gray-200 text-black rounded-lg">
      <img className="mr-5 rounded-lg" src={blogImg} alt="" />
      <div className="p-2 h-3/4 my-auto">
        <h3 className="text-4xl mb-3">{blogTitle}</h3>
        <p className="text-lg">{blogUpdateTime}</p>

        <Link to={`/hackthons/${blogId}`}>
          <button className="btn btn-primary mt-4">Details</button>
        </Link>
      </div>


    </div>
  );
};

export default SingleData;