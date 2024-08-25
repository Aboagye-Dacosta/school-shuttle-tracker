import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiDeleteUser } from "../../helpers/users/apiDeleteUser";

export function useDeleteUser() {
  const queryClient = useQueryClient();
  const { mutate: deleteUser, isPending: isDeletingUser } = useMutation({
    mutationFn: apiDeleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
      toast.success("User data deleted successful");
    },
    onError: () => {
      toast.error("Could not delete user data");
    },
  });

  return {
    deleteUser,
    isDeletingUser,
  };
}
