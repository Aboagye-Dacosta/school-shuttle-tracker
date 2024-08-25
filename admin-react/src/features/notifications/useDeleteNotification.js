import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiDeleteNotification } from "../../helpers/notifications/apiDeleteNotifciation";

export function useDeleteNotification() {
  const queryClient = useQueryClient();
  const { mutate: deleteNotification, isPending: isDeletingNotification } =
    useMutation({
      mutationFn: apiDeleteNotification,
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["notifications"],
        }),
          toast.success("Feedback delete successful.");
      },
      onError: () => {
        toast.error("Could not delete feedback.");
      },
    });

  return {
    deleteNotification,
    isDeletingNotification,
  };
}
