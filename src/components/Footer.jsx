import { communityLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        
        <div>
          <h3 className="text-md font-semibold mb-4">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* All Rights Reserved Section */}
      <div className="mt-10 border-t border-neutral-700 pt-6 text-center">
        <p className="text-neutral-400 text-sm">
          &copy; {new Date().getFullYear()}{" "}
          <a 
            href="https://api.whatsapp.com/send?phone=2349062288078&text=Hello,%20I'm%20interested%20in%20your%20services!" 
            className="font-bold text-white hover:text-orange-500 transition"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Lamar
          </a>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
