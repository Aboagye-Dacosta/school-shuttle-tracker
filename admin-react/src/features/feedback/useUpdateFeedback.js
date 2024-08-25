import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiUpdateFeedback } from "../../helpers/feedbacks/apiUpdateFeedback";
import toast from "react-hot-toast";

export function useUpdateFeedback() {
  const queryClient = useQueryClient();
  const { mutate: updateFeedback, isPending: isUpdatingFeedback } = useMutation(
    {
      mutationFn: (feedback) => apiUpdateFeedback(feedback["id"],feedback),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["feedbacks"],
        });
        toast.success("Feedback update successful");
      },
      onError: () => {
        toast.error("Could not update feedback.");
      },
    }
  );
  return {
    updateFeedback,
    isUpdatingFeedback,
  };
}
