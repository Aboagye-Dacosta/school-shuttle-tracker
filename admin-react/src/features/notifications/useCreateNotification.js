import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiCreateNotification } from "../../helpers/notifications/apiCreateNotification";

export function useCreateNotification ()
{
    const queryClient = useQueryClient();
    const {
        mutate: createNotification,isPending: isCreatingNotification
    } = useMutation({
      mutationFn: apiCreateNotification,
    onSuccess: () => {
      toast.success("bus created successfully");
      queryClient.invalidateQueries({
        queryKey: ["notifications"]
      })
    },
    onError: (error) => {
      toast.error(`Sorry could not crate bus ${error.message}`);
    },
    })


    return {
        createNotification,
        isCreatingNotification
    }
}