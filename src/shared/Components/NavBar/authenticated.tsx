// import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import "./app.css";
import Avatar from "/avatar.svg";
import Logo from "/logo.svg";

export const NavbarConnected = () => {
  return (
    <header>
      <div className="header-wrapper max-sm:max-h-16">
        <div className="header-logo">
          <a href="/">
            <img src={Logo} className="h-12 ml-10" alt="logo" />
          </a>
        </div>
        <nav className="invisible md:visible header-nav">
          <ul className="flex-col hidden px-1 pt-6 h-30 toggle-menu md:flex md:bg-transparent md:pt-0 md:flex-row md:space-x-10 md:w-auto md:items-end md:justify-end">
            <li className="py-2 mt-2 text-left transition-transform border-t border-b border-afg border-lg hover:-translate-y-1 md:border-0">
              <Link
                to="/"
                className="mb-8 text-lg font-medium text-white hover:text-amber-500"
              >
                Demande de devis &#11163;
              </Link>
            </li>

            <li className="py-2 mt-2 text-center transition-transform border-t border-b border-gray-200 hover:-translate-y-1 md:border-0">
              <Link
                to="/"
                className="mb-8 text-lg font-medium text-white hover:text-amber-500"
              >
                Réclamations &#11163;
              </Link>
            </li>

            <li className="py-2 mt-2 text-center transition-transform border-t border-b border-gray-200 hover:-translate-y-1 md:border-0">
              <Link
                to="/"
                className="mb-8 text-lg font-medium text-white hover:text-amber-500"
              >
                Changement d’agent &#11163;
              </Link>
            </li>

            <img
              src={Avatar}
              className="absolute overflow-visible md:w-[55px] lg:right-[9%] md:right-[10%] sm:right-[-10%]"
              alt="logo"
            />
            <li className="py-2 mt-2 text-center transition-transform border-t border-b border-gray-200 hover:-translate-y-1 md:border-0">
              <Link
                to="/"
                className="mb-8 text-lg font-medium text-white hover:text-amber-500"
              >
                Darius Boti &#11163;
              </Link>
            </li>
          </ul>

          <div className="nav-background"></div>
        </nav>
      </div>
    </header>
  );
};
