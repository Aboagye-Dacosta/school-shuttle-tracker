import { useQuery, useQueryClient } from "@tanstack/react-query";
import { apiGetDriver } from "../../helpers/drivers/apiGetDriver";

export function useDriver(driverId) {
    const queryClient = useQueryClient();
    
  const {
    data: driver,
    isPending: isLoadingDriver,
    error,
  } = useQuery({
    queryKey: ["driver", driverId],
    queryFn: () => apiGetDriver(driverId),
    initialData: () =>
      queryClient
        .getQueriesData({
          queryKey: ["drivers"],
        })
        .find(({ id }) => id === driverId),
    initialDataUpdatedAt: queryClient.getQueryState(["drivers"])?.dataUpdatedAt,
  });

  if (error) throw new Error(error.message);

  return {
    driver,
    isLoadingDriver,
  };
}
