import { FooterComponent } from "@/shared/Components/Footer";
import { NavbarVisitor } from "@/shared/Components/NavBar/Visitor";
import FormLogin from "@/shared/FormRequest/FormLogin";
import Assistant from "/assistant.svg";
import Bubbles from "/bubbles.svg";

function Vitrine() {
  return (
    <div className="w-full h-full">
      <section className={`relative bg-afg`}>
        {NavbarVisitor()}

        <div className="grid grid-cols-12">
          <div className="relative col-span-12 ">
            <div className="container mx-auto ">
              <div className="relative lg:w-[50%] max-sm:[100%] md:[70%]">
                <h3 className="text-lg font-bold text-left text-green-500 sm:text-lg md:text-xl lg:text-2xl">
                  Bienvenue dans l'espace
                </h3>
                <h1 className="mt-5 ml-2 text-3xl font-bold text-left text-white sm:text-3xl md:text-4xl lg:text-5xl">
                  Service Client
                </h1>

                <div className="mt-4 ml-2 text-sm sm:text-md md:text-lg lg:text-xl">
                  <p className="font-bold text-white">
                    Ce espace est réservé aux clients LAVANDIÈRE.
                  </p>

                  <p className="text-sm font-medium leading-5 text-white md:text-md">
                    Avez-vous des demandes de devis, des réclamions à <br />
                    faire ? Veuillez vous connecter dans l’onglet ci-dessous.
                  </p>
                </div>

                {FormLogin()}
                <div className="w-20 h-full col-span-2 icon-mid assistant-ove-lay">
                  <img
                    src={Bubbles}
                    alt="Bubbles"
                    className="invisible sm:visible md:visible md:h-20 lg:mr-8 lg:h-20"
                  />
                </div>
              </div>
            </div>
            <div
              className="absolute overflow-hidden top-0 lg:w-[52%] md:h-[480px] lg:h-[550px]
              assistant-over"
              style={{ backgroundImage: `url(${Assistant})`, right: "-5%" }}
            ></div>
          </div>
        </div>
      </section>

      {FooterComponent()}
    </div>
  );
}

export default Vitrine;
