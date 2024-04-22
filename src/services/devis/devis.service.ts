/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { dateDay } from "@/shared/Utils/Functions/getDateDay";
import { axios } from "../axios";

export type DevisProps = {
  type_service: [] | any;
  description?: string;
  userId: number;
  updateProgress: any;
  toast: any;
  form: any;
  navigate: any;
  dispatch: any;
};

const  addDevisService = async ({
  type_service,
  userId,
  updateProgress,
  toast,
  form,
  // navigate,
  // dispatch,
}: DevisProps) => {
  updateProgress(60);
  axios
    const requestData = type_service.map((type_serviceData: {}) => ({
      url: 'posts',
      dataContent: type_serviceData
    }));
    const requests = requestData.map((item: DevisProps) =>
       axios.post('posts', {
        title: type_service,
        body: item.type_service,
        userId: userId,
      }));
      await Promise.all(requests)

    .then(function (responses) {
      console.log(responses, 'responses');
      if (responses) {

        updateProgress(100);
        toast.success("Le devis à bien été e,nregistrer !", {
          description: dateDay(),
          duration: 5000,
          action: {
            label: "Masquer",
            onClick: () => console.log("Masquer"),
          },
        });
        form.reset();
        // navigate("/dashboard");
      }
    })
    .catch(function (error) {
      console.log(error, "error create regis");
      toast.error("Une erreur s'est produite !", {
        description: dateDay(),
        duration: 15000,
        action: {
          label: "Masquer",
          onClick: () => console.log("Masquer"),
        },
      });
      return;
    });
};

export { addDevisService };

