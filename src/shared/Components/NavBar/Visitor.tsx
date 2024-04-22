import { Button } from "@/components/ui/button";
import { Link as LinkDom } from "react-router-dom";
import { Link } from "react-scroll";
import "./app.css";
import Logo from "/logo.svg";

export const NavbarVisitor = () => {
  return (
    <nav className="fixed top-0 z-20 grid w-full grid-cols-none p-4 shadow-md bg-afg md:max-w-7xl md:grid-cols-menu md:shadow-none md:relative md:mx-auto md:bg-transparent">
      <div className="flex items-center justify-between md:justify-center">
        <Link to="/" spy={true} smooth={true} offset={-100} duration={500}>
          <img src={Logo} alt="logo" className="w-16" />
        </Link>
      </div>

      <ul className="flex-col hidden px-1 pt-6 h-30 toggle-menu bg-gray-50 md:flex md:bg-transparent md:pt-0 md:flex-row md:space-x-10 md:w-auto md:items-end md:justify-end">
        <li className="py-2 text-center transition-transform border-t border-b border-gray-200 hover:-translate-y-1 md:border-0">
          <LinkDom
            to=""
            className="text-lg font-medium text-white hover:text-amber-500"
          >
            Qui sommes-nous ?
          </LinkDom>
        </li>

        <li className="py-2 text-center transition-transform border-t border-b border-gray-200 hover:-translate-y-1 md:border-0">
          <Button variant="afg" className="">
            Contactez-nous
          </Button>
        </li>
      </ul>
    </nav>
  );
};
