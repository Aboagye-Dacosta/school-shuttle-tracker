import { useQuery } from "@tanstack/react-query";
import { apiGetFeedbacks } from "../../helpers/feedbacks/apiGetFeedbacks";

export function useGetFeedbacks() {
  const { data: feedbacks, isPending: isLoadingFeedbacks } = useQuery({
    queryKey: ["feedbacks"],
    queryFn: apiGetFeedbacks,
  });

  return {
    feedbacks,
    isLoadingFeedbacks,
  };
}
