import { FooterComponent } from "@/shared/Components/Footer";
import { NavbarConnected } from "@/shared/Components/NavBar/authenticated";
import { Card } from "flowbite-react";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Agent from "/agent.svg";
import Claim from "/claim.svg";
import Devis from "/devis.svg";
import Interrogation from "/interrogation.svg";

function Dashboard() {
  const navigate = useNavigate();

  const showDevis = () => {
    navigate("/devis");
  };
  return (
    <div className="w-full h-full">
      <section className={`relative bg-white`}>
        {NavbarConnected()}

        <div className="grid grid-cols-12">
          <div className="relative col-span-12">
            <div className="container mx-auto ">
              <div className="relative w-[100%]">
                <h1 className="py-12 ml-2 text-2xl font-bold text-center text-afg sm:text-3xl md:text-4xl lg:text-5xl ">
                  Dites-nous comment pouvons-vous vous être utile.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={` bg-white`}>
        <div className="container mx-auto ">
          <div className="grid grid-cols-12 gap-6">
            <div
              onClick={showDevis}
              className="relative col-span-12 max-sm:col-span-12 md:col-span-6 lg:col-span-4"
            >
              <div className="relative w-[100%]">
                <Card
                  className="max-w-sm"
                  imgAlt="Meaningful alt text for an image that is not purely decorative"
                  imgSrc={Devis}
                >
                  <h5 className="text-2xl font-bold tracking-tight text-center text-green-700 dark:text-white">
                    Demande de devis
                  </h5>
                  <p className="font-normal text-center text-gray-400 dark:text-gray-400">
                    Pour votre soumission, et suivie de devis, c’est ici !
                  </p>
                  <div className="flex items-center justify-center">
                    <ChevronDown className="text-afg" />
                  </div>
                </Card>
              </div>
            </div>

            <div
              onClick={showDevis}
              className="relative col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-4"
            >
              <div className="relative w-[100%]">
                <Card
                  className="max-w-sm"
                  imgAlt="Meaningful alt text for an image that is not purely decorative"
                  imgSrc={Claim}
                >
                  <h5 className="text-2xl font-bold tracking-tight text-center text-green-700 dark:text-white">
                    Réclamations
                  </h5>
                  <p className="font-normal text-center text-gray-400 dark:text-gray-400">
                    Pour votre soumission, et suivie de réclamations, c’est ici
                    !
                  </p>

                  <div className="flex items-center justify-center">
                    <ChevronDown className="text-afg" />
                  </div>
                </Card>
              </div>
            </div>

            <div
              onClick={showDevis}
              className="relative col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-4"
            >
              <div className="relative w-[100%]">
                <Card
                  className="max-w-sm"
                  imgAlt="Meaningful alt text for an image that is not purely decorative"
                  imgSrc={Agent}
                >
                  <h5 className="text-2xl font-bold tracking-tight text-center text-green-700 dark:text-white">
                    Changement d’agent
                  </h5>
                  <p className="font-normal text-center text-gray-400 dark:text-gray-400">
                    Si vous souhaitez changer l’agent chez vous, c’est ici !
                  </p>
                  <div className="flex items-center justify-center">
                    <ChevronDown className="text-afg" />
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={` h-full py-10`}>
        <div className="flex items-center justify-center">
          <div className="h-[200px;] bottom-5">
            <img src={Interrogation} className="h-24 " alt="Interrogation" />
          </div>
        </div>
      </section>

      <div className="invisible h-auto md:visible">{FooterComponent()}</div>
    </div>
  );
}

export default Dashboard;
