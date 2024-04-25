"use client";

import Logo from "/logo.svg";

export function FooterComponent() {
  return (
    <>
      {/* Section Footer  */}

      <section
        id="Footer"
        // className="absolute bottom-0 flex-col hidden w-full max-sm:block bg-afg"
        className="bg-afg"
      >
        <div className="container flex flex-col w-full py-20 mx-auto md:flex-row">
          <div className="flex flex-col justify-start md:w-3/4 lg:w-3/4 md:flex-row">
            <div className="mr-4">
              <img
                src={Logo}
                className="w-20 sm:h-14 md:h-16 lg:h-16"
                alt="Lavandiere"
              />
            </div>
            <div>
              <p className="mb-2 text-sm text-white">
                Cocody – II Plateaux 7ème tranche
              </p>
              <p className="mb-2 text-sm text-white">
                28 BP 304 Abidjan 28, Côte d’ivoire
              </p>
              <p className="text-sm text-white">
                Phone: +225 22 52 34 93 / 96 Fax: +225 22 52 34 99
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-end mt-4 md:w-3/4 lg:w-1/4 md:mt-0">
            <h2 className="mb-2 text-white">Nos sites internet</h2>
            <ul className="text-sm">
              <li className="mb-2 text-white">
                <a href="https://lavandiere-ci.com">
                  &#10148; &nbsp;https://lavandiere-ci.com
                </a>
              </li>
              <li className="text-white">
                <a href="https://lavandiere-ci.com">
                  &#10148; &nbsp;https://lavandiere-ci.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="p-2 text-center bg-green-700">
          <span className="text-sm text-white">
            &copy; Copyright Groupe la Lavandière, Tous Droits Réservés © 2020
          </span>
        </div>
      </section>
    </>
  );
}
