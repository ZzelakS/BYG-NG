import { Link } from "react-router-dom"; // Import Link from react-router-dom
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        The No. 1 Spot
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          for Great Meals and Karaoke Nights
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Unleash your inner superstar at BYG! 🎤✨ Indulge in crafted cocktails,
        sizzling grills, and unforgettable karaoke nights. Whether you’re here
        to steal the spotlight or soak in the vibes, every moment is a hit.
        <br />
        <br />
        Let the good times roll – your stage awaits!
      </p>
      <div className="flex justify-center my-10">
        <Link
          to="/packages" // Use the Link component to handle internal navigation
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Book Now
        </Link>
        <a
          href="https://api.whatsapp.com/send/?phone=2349167417758&text&type=phone_number&app_absent=0&wame_ctl=1"
          className="py-3 px-4 mx-3 rounded-md border"
        >
          Contact Us
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          playsInline
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          playsInline
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4 object-cover"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
