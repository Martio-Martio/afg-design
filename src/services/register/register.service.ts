/* eslint-disable @typescript-eslint/no-explicit-any */
import { dateDay } from "@/shared/Utils/Functions/getDateDay";
import { addItem } from "@/store/reducers/UserSlice";
import Cookies from "js-cookie";
import { axios } from "../axios";

export type UserProps = {
  title: string;
  body: string;
  userId: number;
  updateProgress: any;
  toast: any;
  form: any;
  navigate: any;
  dispatch: any;
};

const addUserService = ({
  title,
  body,
  userId,
  updateProgress,
  toast,
  form,
  navigate,
  dispatch,
}: UserProps) => {
  updateProgress(60);
  axios
    .post('posts', {
      title: title,
      body: body,
      userId: userId,
    })
    .then(function (response) {
      if (response.data) {
        const dataGet = {
          title: response.data.title,
          body: response.data.body,
          userId: response.data.userId,
          id: response.data.id,
        };
        dispatch(addItem(dataGet));
        updateProgress(100);
        Cookies.set("tokenCook", response.data.userId, { expires: 1 });
        toast.success("Connexion réussi, Bon retour parmis nous ! !", {
          description: dateDay(),
          duration: 5000,
          action: {
            label: "Masquer",
            onClick: () => console.log("Masquer"),
          },
        });
        navigate("/dashboard");
        form.reset();
      }
    })
    .catch(function (error) {
      console.log(error, "error create regis");
      toast.error("Une erreur s'est produite !", {
        description: dateDay(),
        duration: 5000,
        action: {
          label: "Masquer",
          onClick: () => console.log("Masquer"),
        },
      });
      return;
    });
};

export { addUserService };

