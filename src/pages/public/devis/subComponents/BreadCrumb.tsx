import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { NavbarConnected } from "@/shared/Components/NavBar/authenticated";
import { Minus } from "lucide-react";
export const BreadCrumb = () => {
  return (
    <section className={`relative bg-white`}>
      {NavbarConnected()}

      <div className="grid grid-cols-12 py-5">
        <div className="relative col-span-12">
          <div className="w-full mx-auto ">
            <div className="space-x-5 bg-[#BFBFBF] relative w-[100%] h-12 border border-gray-400 flex flex-row ">
              <div className="flex flex-col justify-center w-5/6 ">
                <h1 className="ml-2 font-bold text-center text-md text-afg sm:text-sm md:text-xl lg:text-3xl">
                  Formulaire de demande devis
                </h1>
              </div>

              <div className="flex invisible sm:w-full lg:w-100 sm:visible sm:flex-col sm:items-center sm:justify-center sm:text-center">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem className="sm:mt-5 md:mt-0">
                      <BreadcrumbLink href="#">
                        <Badge variant={"afg"}>1</Badge>
                        <span className="text-afg"> À propos de vous</span>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="sm:mt-5 md:mt-0">
                      <Minus className="text-afg" />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem className="sm:mt-5 md:mt-0">
                      <BreadcrumbLink href="#">
                        <Badge variant={"afg"}>2</Badge>
                        <span className="text-afg"> Services</span>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="invisible md:visible">
                      <Minus className="text-afg" />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem className="invisible md:visible">
                      <BreadcrumbLink href="#">
                        <Badge variant={"secondary"}>
                          <span className="text-gray-500">3</span>
                        </Badge>
                        <span className="text-gray-500">
                          {" "}
                          Aperçu et confirmation
                        </span>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
