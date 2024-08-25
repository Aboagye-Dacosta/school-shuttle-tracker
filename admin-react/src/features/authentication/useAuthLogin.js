import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../services/apiAuth";

export function useAuthLogin() {
  const navigate = useNavigate();

  const { mutate: login, isPending: isLoggingInUser } = useMutation({
    mutationFn: (data) => loginApi(data),
    onSuccess: (data) =>
    {
      const { managerEmail } = data;
      if(managerEmail)
        toast.success("You have successfully logged in ");
      else throw new Error("invalid user credentials");
      navigate("/");
    },
    onError: (error) => toast.error(error.message),
  });

  return { isLoggingInUser, login };
}
