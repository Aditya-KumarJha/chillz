import { useState } from "react";
import { Home, ShoppingBag, Truck, Phone } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { label: "Home", icon: <Home className="w-5 h-5 mr-2" /> },
    { label: "Shop", icon: <ShoppingBag className="w-5 h-5 mr-2" /> },
    { label: "Delivery", icon: <Truck className="w-5 h-5 mr-2" /> },
    { label: "Contact", icon: <Phone className="w-5 h-5 mr-2" /> },
  ];

  return (
    <nav className="flex items-center justify-between px-[2vw] py-[0.5vh] text-white">
      <div className="flex items-center my-[2.5vh] ml-[6vw] md:ml-[2vw]">
        <img
          src="/images/logo.png"
          alt="Chillz Logo"
          className="h-[2rem] md:h-[2.5rem] w-auto"
          draggable="false"
        />
      </div>

      <ul className="hidden md:flex md:space-x-[4vw] lg:space-x-[4.25vw] font-medium text-[0.5rem] md:text-[1.1rem] lg:text-[1.25rem] my-[2.5vh]">
        {navItems.map((item, index) => (
          <li
            key={index}
            className="cursor-pointer relative transition duration-300 hover:scale-110 group"
          >
            <span className="transition" style={{ color: "white" }}>
              {item.label}
            </span>
            <span
              className="absolute left-0 -bottom-1 h-[2px] w-full scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"
              style={{ backgroundColor: theme.accent }}
            ></span>
          </li>
        ))}
      </ul>

      <button
        className="hidden md:block border px-[1.5rem] py-[0.75rem] md:px-[1.2rem] md:py-[0.6rem] md:text-sm lg:text-base font-medium transition my-[2.5vh] mr-[3vw]"
        style={{ borderColor: "white", color: "white" }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "white";
          e.currentTarget.style.color = theme.accent;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.color = "white";
        }}
      >
        Order Your Ice-cream
      </button>

      <button
        onClick={toggleMobileMenu}
        className="md:hidden text-white focus:outline-none z-[100] p-2"
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        )}
      </button>

      <div
        className={`fixed top-0 left-0 w-full h-full transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center justify-center space-y-8 z-[90]`}
        style={{
          backgroundColor: theme.accent,
        }}
      >
        <ul className="flex flex-col items-center space-y-6 text-2xl font-bold">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center cursor-pointer transition duration-300"
              style={{ color: "white" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f1f1f1")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
              onClick={toggleMobileMenu}
            >
              {item.icon}
              {item.label}
            </li>
          ))}
        </ul>
        <button
          className="border px-8 py-4 text-white transition-all duration-300"
          style={{ borderColor: "white" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "white";
            e.currentTarget.style.color = theme.accent;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "white";
          }}
        >
          Order Your Ice-cream
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
