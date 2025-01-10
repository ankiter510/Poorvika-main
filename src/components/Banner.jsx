import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="w-full">

      <div className="text-sm flex flex-wrap justify-start gap-4 md:justify-center lg:justify-between">
        <Link
          to="/mobiles"
          className="text-black hover:underline px-3 py-2 font-bold whitespace-nowrap"
        >
          Mobile & Accessories
        </Link>
        <Link
          to="/computers"
          className="text-black hover:underline px-3 py-2 font-bold whitespace-nowrap"
        >
          Computer & Tablets
        </Link>
      </div>


      {/* Banner Image */}
      <div>
        <img
          src="./Images/Poorvika.webp"
          alt="Poorvika Banner"
          className="w-full h-auto object-cover shadow-md"
        />
      </div>
    </div>
  );
};

export default Banner;
