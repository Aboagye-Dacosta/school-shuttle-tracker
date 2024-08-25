import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiUpdateDriver } from "../../helpers/drivers/apiUpdateDriver";

export function useUpdateDriver ()
{
    const queryClient = useQueryClient();
  const { mutate: updateDriver, isPending: isUpdatingDriver } = useMutation({
    mutationKey: ["drivers"],
      mutationFn: (data) => apiUpdateDriver(data,data["id"]),
      onSuccess: () => {
      toast.success("driver updated successfully");
      queryClient.invalidateQueries({
        queryKey: ["drivers"]
      })
    },
    onError: (error) => {
      toast.error(`Sorry could not update driver ${error.message}`);
    },
  });

  return {
    updateDriver,
    isUpdatingDriver,
  };
}
