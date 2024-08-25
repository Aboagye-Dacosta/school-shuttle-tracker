import { useQuery } from "@tanstack/react-query";
import { apiGetUserLogs } from "../../helpers/users/apiGetUserLogs";

export function useUserLogs(userId) {
  const { data: userLogs, isPending: isLoadingUserLogs } = useQuery({
    queryKey: ["userLogs", userId],
    queryFn: () => apiGetUserLogs(userId),
  });

 return {
    userLogs, isLoadingUserLogs
  }
}
