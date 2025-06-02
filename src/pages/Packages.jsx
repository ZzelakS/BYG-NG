import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";
import Footer from "../components/Footer";

const Packages = () => {
  return (
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Pricing
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-6 border border-neutral-700 rounded-xl shadow-lg hover:shadow-xl transition bg-neutral-900">
              
              {/* Pricing Image */}
              <img 
                src={option.image} 
                alt={option.title} 
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              
              {/* Pricing Title */}
              <p className="text-4xl mb-6">
                {option.title}
                {option.title === "Pro" && (
                  <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl ml-2">
                    (Most Popular)
                  </span>
                )}
              </p>
              
              {/* Pricing Amount */}
              <p className="mb-6">
                <span className="text-5xl mr-2">{option.price}</span>
                <span className="text-neutral-400 tracking-tight">/Head</span>
              </p>
              
              {/* Features List */}
              <ul>
                {option.features.map((feature, i) => (
                  <li key={i} className="mt-4 flex items-center">
                    <CheckCircle2 className="text-orange-500" />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Booking Button */}
              <a
                href="https://api.whatsapp.com/send/?phone=2349167417758&text&type=phone_number&app_absent=0&wame_ctl=1"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-10 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
              >
                Book Now
              </a>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
    
  );
};

export default Packages;
