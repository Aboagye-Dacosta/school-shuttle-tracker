import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiCreateManager } from "../../helpers/managers/apiCreateManager";

export function useCreateManager ()
{
    const queryClient = useQueryClient()
    const { mutate: createManager, isPending: isCreatingManager } = useMutation({
        mutationFn: apiCreateManager,
         onSuccess: () => {
      toast.success("manager created successfully");
      queryClient.invalidateQueries({
        queryKey: ["managers"]
      })
    },
    onError: (error) => {
      toast.error(`Sorry could not create manager ${error.message}`);
    },
    });
    
    return {
        createManager,
        isCreatingManager,
    }
}