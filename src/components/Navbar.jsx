import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  // Function to close the mobile drawer when a nav item is selected
  const closeMobileDrawer = () => {
    setMobileDrawerOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <Link to="/" onClick={closeMobileDrawer}><img className="h-10 w-10 mr-2" src={logo} alt="Logo" /></Link>
            <Link to="/" onClick={closeMobileDrawer}><span className="text-xl tracking-tight">Backyard Grill</span></Link>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link to={item.href} onClick={closeMobileDrawer}>{item.label}</Link> {/* Close the drawer on nav item click */}
              </li>
            ))}
          </ul>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <Link to={item.href} onClick={closeMobileDrawer}>{item.label}</Link> {/* Close the drawer on nav item click */}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
