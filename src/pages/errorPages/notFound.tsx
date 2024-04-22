"use client";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

import { Card } from "flowbite-react";
import fd from "/page-not-found.jpg";

function NotFound() {
  return (
    <div id="parent">
      <div className="flex flex-col justify-center flex-1 h-screen px-8 lg:px-8 bg-afg">
        <div className="flex flex-row justify-center w-full">
          <Card className="justify-center">
            <CardHeader>
              <CardDescription className="font-medium text-center text-gray-500">
                Pas non trouvée !
              </CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src={fd}
                alt="fd"
                className="w-full h-[350px] object-cover"
              />
            </CardContent>
            <CardFooter className="w-[300px]">
              <Link
                className="block w-full py-2 text-sm font-semibold text-center text-white bg-gray-800 border border-gray-800 rounded-md hover:bg-gray-900"
                to="/"
              >
                Retourner sur la page d'accueil
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
