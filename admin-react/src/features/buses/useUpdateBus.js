import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiUpdateBus } from "../../helpers/buses/apiUpdateBus";

export function useUpdateBus ()
{
    const queryClient = useQueryClient();
  const { mutate: updateBus, isPending: isUpdatingBus } = useMutation({
    mutationKey: ["buses"],
      mutationFn: (data) => apiUpdateBus(data,data["id"]),
      onSuccess: () => {
      toast.success("bus updated successfully");
      queryClient.invalidateQueries({
        queryKey: ["buses"]
      })
    },
    onError: (error) => {
      toast.error(`Sorry could not update bus ${error.message}`);
    },
  });

  return {
    updateBus,
    isUpdatingBus,
  };
}
