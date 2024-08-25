import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiUpdateUser } from "../../helpers/users/apiUpdateUser";

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isPending: isUpdatingUser } = useMutation({
    mutationFn: (user) => apiUpdateUser(user, user["id"]),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
      toast.success("User data updated successful");
    },
    onError: () => {
      toast.error("Could not update user data");
    },
  });

  return {
    updateUser,
    isUpdatingUser,
  };
}
