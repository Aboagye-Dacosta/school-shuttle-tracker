import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiCreateBus } from "../../helpers/buses/apiCreateBus";

export function useCreateBus ()
{
  const queryClient = useQueryClient();
    const { mutate: createBus, isPending: isCreatingBus } = useMutation({
      mutationKey: ["buses"],
      mutationFn: apiCreateBus,
    onSuccess: () => {
      toast.success("bus created successfully");
      queryClient.invalidateQueries({
        queryKey: ["buses"]
      })
    },
    onError: (error) => {
      toast.error(`Sorry could not crate bus ${error.message}`);
    },
  });

  return {
    createBus,
    isCreatingBus,
  };
}
