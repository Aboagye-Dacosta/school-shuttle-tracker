import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiDeleteFeedback } from "../../helpers/feedbacks/apiDeleteFeedback";

export function useDeleteFeedback() {
  const queryClient = useQueryClient();
  const { mutate: deleteFeedback, isPending: isDeletingFeedback } = useMutation(
    {
      mutationFn: apiDeleteFeedback,
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["feedbacks"],
        }),
          toast.success("Feedback delete successful.");
      },
      onError: () => {
        toast.error("Could not delete feedback.");
      },
    }
  );
  return {
    deleteFeedback,
    isDeletingFeedback,
  };
}
