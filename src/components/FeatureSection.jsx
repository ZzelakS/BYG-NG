import { useState } from "react";
import { motion } from "framer-motion";
import { features } from "../constants";

const FeatureSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          What we offer
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Let's take you on a{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            fun ride!
          </span>
        </h2>
      </div>

      {/* Feature Cards Grid */}
      <div className="grid gap-8 mt-10 lg:mt-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-neutral-900 p-6 rounded-2xl shadow-lg cursor-pointer relative"
            initial={{ scale: 1, y: 0 }}
            animate={{
              scale: expandedIndex === index ? 1.05 : 1,
              y: expandedIndex === index ? -10 : 0,
            }}
            transition={{ duration: 0.3 }}
            onClick={() =>
              setExpandedIndex(expandedIndex === index ? null : index)
            }
          >
            <img
              src={feature.image}
              alt={feature.text}
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="flex items-center justify-center w-12 h-12 bg-orange-700 text-white rounded-full mt-4">
              {feature.icon}
            </div>
            <h5 className="text-xl font-semibold text-white mt-4">
              {feature.text}
            </h5>
            <p className="text-md text-neutral-400 mt-2">
              {feature.description}
            </p>

            {/* Reveal Button on Expansion */}
            {expandedIndex === index && (
              <motion.a
                href="https://api.whatsapp.com/send/?phone=2349167417758&text&type=phone_number&app_absent=0&wame_ctl=1"
                className="mt-6 inline-block bg-orange-600 text-white px-4 py-2 rounded-lg text-center w-full hover:bg-orange-700 transition"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                Learn More
              </motion.a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
