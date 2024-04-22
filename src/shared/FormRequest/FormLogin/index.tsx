import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { addUserService } from "@/services/register/register.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { toast } from "sonner";
import { z } from "zod";
import { FormSchema } from "./validator";

function FormLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [progress, setProgress] = useState(0);
  const updateProgress = (param: number) => {
    setProgress((current) => current + param);
  };
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof FormSchema>) {
    const bus = {
      title: values.username,
      body: values.password,
      userId: new Date().getTime(),
      updateProgress: updateProgress,
      toast: toast,
      form: form,
      navigate: navigate,
      dispatch: dispatch,
    };

    addUserService(bus);
    form.reset();
  }

  return (
    <>
      <div className="grid grid-cols-5 py-5 ">
        <div className="col-span-5 sm:col-span-3 sm:mr-0 md:col-span-4 md:mr-0 lg:col-span-4 lg:mr-0 xl:col-span-3 xl:mr-0">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Identifiant</FormLabel>
                    <FormControl>
                      <Input placeholder="Identifiant" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Mot de passe</FormLabel>
                    <FormControl>
                      <Input placeholder="Mot de passe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button variant="afg_green" type="submit">
                Se connecter
              </Button>
            </form>
          </Form>
        </div>
      </div>

      <LoadingBar
        color="#4DA655"
        shadow={true}
        height={5}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    </>
  );
}

export default FormLogin;
