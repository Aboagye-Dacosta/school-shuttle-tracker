import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiDeleteDriver } from "../../helpers/drivers/apiDeleteDriver";

export function useDeleteDriver(driverId)
{
    const queryClient = useQueryClient();
    
    const { mutate: deleteDriver , isPending: isDeletingDriver} = useMutation({
        mutationKey: ["Drivers", driverId],
        mutationFn: () => apiDeleteDriver(driverId), 
        onError: (error) => toast.error(error.message),
        onSuccess: () =>
        {
            toast.success("Driver deleted successfully");
            queryClient.invalidateQueries(
             {   queryKey: ["drivers"]}
            );
        }
    })

    return {
        deleteDriver,
        isDeletingDriver
    }
}