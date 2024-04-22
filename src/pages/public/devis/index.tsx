import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { addDevisService } from "@/services/devis/devis.service";
import { FooterComponent } from "@/shared/Components/Footer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { toast } from "sonner";
import { z } from "zod";
import { BarStatus } from "./subComponents/BarStatus";
import { BreadCrumb } from "./subComponents/BreadCrumb";
import { FormSchema } from "./validator";
import Entretien from "/entretien.svg";
import Interim from "/interim.svg";
import Lighthouse from "/lighthouse.svg";
import Sola from "/sola.svg";

function Devis() {
  const items = [
    {
      id: "Entretien des locaux",
      label: "Entretien des locaux",
    },
    {
      id: "Traitement phytosanitaire",
      label: "Traitement phytosanitaire",
    },
    {
      id: "Création et aménagement des espaces verts",
      label: "Création et aménagement des espaces verts",
    },
    {
      id: "Désinfection",
      label: "Désinfection",
    },
  ] as const;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [progress, setProgress] = useState(0);
  const updateProgress = (param: number) => {
    setProgress((current) => current + param);
  };
  const toDash = () => {
    navigate("/dashboard");
  };
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      description: undefined,
      type_service: [""],
    },
  });

  function onSubmit(values: z.infer<typeof FormSchema>) {
    const bus = {
      type_service: values.type_service,
      description: values.description,
      userId: new Date().getTime(),
      updateProgress: updateProgress,
      toast: toast,
      form: form,
      navigate: navigate,
      dispatch: dispatch,
    };
    addDevisService(bus);
  }

  return (
    <div className="w-full">
      {BreadCrumb()}

      <h1 className="ml-2 font-bold text-left text-md text-zinc-950 sm:text-sm md:text-xl lg:text-3xl">
        Type de service
      </h1>

      <section className={`relative bg-white`}>
        <div className="grid grid-cols-12 py-5">
          <div className="relative col-span-12">
            <div className="w-full mx-auto ">
              <div className="space-x-5  relative w-[100%] h-full flex flex-row ">
                <div className="flex flex-col invisible w-5/6 sm:visible">
                  {/* Parent */}
                  <div className="flex flex-row">
                    <div className="flex flex-col">
                      {/* 01 */}
                      <div className="flex flex-row justify-between w-full ">
                        <div className="flex flex-col items-center justify-center">
                          <span className="m-2 font-bold text-afg">
                            LAVANDIÈRE ENTRETRIEN
                          </span>
                        </div>
                        <div className="flex flex-col m-5 border-2 border-solid rounded-lg border-afg ">
                          <img
                            src={Entretien}
                            className="ml-10 h-[60px] object-cover w-40"
                            alt="Entretien"
                          />
                        </div>
                      </div>

                      {/* 02 */}
                      <div className="flex flex-row justify-between w-full p-5 ">
                        <div className="flex flex-col items-center justify-center">
                          <span className="font-normal text-afg">
                            LAVANDIÈRE INTERIM
                          </span>
                        </div>
                        <div className="flex flex-col border border-solid rounded-lg border-afg ">
                          <img
                            src={Interim}
                            className=" h-[60px] object-cover w-40 ml-10"
                            alt="Interim"
                          />
                        </div>
                      </div>

                      {/* 03 */}
                      <div className="flex flex-row justify-between w-full p-5 ">
                        <div className="flex flex-col items-center justify-center">
                          <span className="font-normal text-afg">SOLA</span>
                        </div>
                        <div className="flex flex-col border border-solid rounded-lg border-afg ">
                          <img
                            src={Sola}
                            className="ml-10 h-[60px] object-cover w-40"
                            alt="Sola"
                          />
                        </div>
                      </div>

                      {/* 04 */}
                      <div className="flex flex-row justify-between w-full p-5 ">
                        <div className="flex flex-col items-center justify-center">
                          <span className="font-normal text-afg">
                            LIGHTHOUSE CI
                          </span>
                        </div>
                        <div className="flex flex-col items-center justify-center border border-solid rounded-lg w-50 border-afg ">
                          <img
                            src={Lighthouse}
                            className="ml-10 h-[60px] object-contain w-40"
                            alt="Lighthouse"
                          />
                        </div>
                      </div>
                    </div>
                    {/* bar */}
                    {BarStatus()}
                  </div>
                </div>

                <div className="flex invisible w-full sm:w-full lg:w-100 sm:visible sm:flex-col sm:text-center">
                  <div className="sm:items-start sm:justify-start">
                    <h1 className="ml-2 font-bold text-left text-gray-400 text-pretty text-md sm:text-sm md:text-md lg:text-md">
                      Choisissez le type de service que vous souhaitez, vous
                      pouvez souhaiter plusieurs à la fois, en fonction de votre
                      besoin.
                    </h1>
                  </div>
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-5"
                    >
                      <div className="space-y-0 sm:items-start sm:justify-start">
                        <div className="flex space-x-4 items-top">
                          <FormField
                            control={form.control}
                            name="type_service"
                            render={() => (
                              <FormItem>
                                <div className="mb-4">
                                  <br />
                                </div>
                                {items.map((item) => (
                                  <FormField
                                    key={item.id}
                                    control={form.control}
                                    name="type_service"
                                    render={({ field }) => {
                                      return (
                                        <FormItem
                                          key={item.id}
                                          className="flex flex-row items-start space-x-3 space-y-0"
                                        >
                                          <FormControl>
                                            <Checkbox
                                              checked={field.value?.includes(
                                                item.id
                                              )}
                                              onCheckedChange={(checked) => {
                                                return checked
                                                  ? field.onChange([
                                                      ...field.value,
                                                      item.id,
                                                    ])
                                                  : field.onChange(
                                                      field.value?.filter(
                                                        (value) =>
                                                          value !== item.id
                                                      )
                                                    );
                                              }}
                                            />
                                          </FormControl>
                                          <FormLabel className="font-normal">
                                            {item.label}
                                          </FormLabel>
                                        </FormItem>
                                      );
                                    }}
                                  />
                                ))}
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>

                      {/* Textarea */}
                      <div className="space-y-3 lg:py-5 sm:items-start sm:justify-start ">
                        <div className="grid w-full">
                          <Label htmlFor="message" className="text-left">
                            Description
                          </Label>
                          <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-white">
                                  Mot de passe
                                </FormLabel>
                                <FormControl>
                                  <Textarea
                                    placeholder="Type your message here."
                                    id="message"
                                    className="w-5/6"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>

                      <div className="flex flex-row items-end justify-end w-5/6 m-5 space-x-4">
                        <Button onClick={toDash} variant="outlinePerso">
                          Précédent
                        </Button>
                        <Button type="submit" variant="afg_green">
                          Suivant
                        </Button>
                      </div>
                    </form>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LoadingBar
        color="#4DA655"
        shadow={true}
        height={5}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      {FooterComponent()}
    </div>
  );
}

export default Devis;
