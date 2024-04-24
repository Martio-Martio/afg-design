// import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import "./app.css";
import Avatar from "/avatar.svg";
import Logo from "/logo.svg";

export const NavbarConnected = () => {
  return (
    <>
      <div className="w-full max-sm:bg-white md:bg-[url('/bg_round.svg')] bg-no-repeat bg-right-bottom">
        <nav className="container relative p-0 mx-auto">
          <div className="flex items-center justify-between">
            <div className="pt-2">
              <Link to="/">
                <img src={Logo} alt="" className="h-[80px] w-full" />
              </Link>
            </div>

            <div className="items-center hidden space-x-6 md:flex">
              <a href="#" className="hover:text-darkGrayishBlue">
                <Link
                  to="/"
                  className="mb-8 text-sm font-medium text-white md:text-md lg:text-lg hover:text-amber-500"
                >
                  Demande de devis &#11163;
                </Link>
              </a>
              <a href="#" className="hover:text-darkGrayishBlue">
                <Link
                  to="/"
                  className="mb-8 text-sm font-medium text-white md:text-md lg:text-lg hover:text-amber-500"
                >
                  Réclamations &#11163;
                </Link>
              </a>
              <a href="#" className="hover:text-darkGrayishBlue">
                <Link
                  to="/"
                  className="mb-8 text-sm font-medium text-white md:text-md lg:text-lg hover:text-amber-500"
                >
                  Changement d’agent &#11163;
                </Link>
              </a>
              {/* <a href="#"></a> */}
              <a
                href="#"
                className="flex flex-row items-center space-x-3 hover:text-darkGrayishBlue"
              >
                <img src={Avatar} className=" w-[35px] md:mb-0 " alt="logo" />
                <Link
                  to="/"
                  className="mb-0 text-sm font-medium text-white md:text-md lg:text-lg hover:text-amber-500"
                >
                  Darius Boti &#11163;
                </Link>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
