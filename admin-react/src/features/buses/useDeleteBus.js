import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiDeleteBus } from "../../helpers/buses/apiDeleteBus";

export function useDeleteBus (busId)
{
    const queryClient = useQueryClient();
    
    const { mutate: deleteBus, isPending: isDeletingBus } = useMutation({
        mutationKey: ["buses", busId],
        mutationFn: () => apiDeleteBus(busId), 
        onError: (error) => toast.error(error.message),
        onSuccess: () =>
        {
            toast.success("bus deleted successfully");
            queryClient.invalidateQueries(
             {   queryKey: ["buses"]}
            );
        }
    })

    return {
        deleteBus,
        isDeletingBus,
    }
}