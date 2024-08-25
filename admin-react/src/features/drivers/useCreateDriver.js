import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiCreateDriver } from "../../helpers/drivers/apiCreateDriver";

export function useCreateDriver()
{
  const queryClient = useQueryClient();
    const { mutate: createDriver, isPending: isCreatingDrivers} = useMutation({
      mutationKey: ["Drivers"],
      mutationFn: apiCreateDriver,
    onSuccess: () => {
      toast.success("Driver created successfully");
      
      queryClient.invalidateQueries({
        queryKey: ["drivers"]
      })
    },
    onError: (error) => {
      toast.error(`Sorry could not crate Driver ${error.message}`);
    },
  });

  return {
    createDriver,
    isCreatingDrivers
  };
}
