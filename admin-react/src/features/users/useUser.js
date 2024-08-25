import { useQuery, useQueryClient } from "@tanstack/react-query";
import { apiGetUser } from "../../helpers/users/apiGetUser";

export function useGetUser (userId)
{
    const queryClient = useQueryClient();
    const { data:user,isPending: isLoadingUser} = useQuery({
        queryKey: ["users", userId],
        queryFn:  () => apiGetUser(userId),
        initialData: () => queryClient.getQueryData(["users"])?.find(user => user.id === userId),
        initialDataUpdatedAt: queryClient.getQueryState()?.dataUpdatedAt
    })

    return {
        user,
        isLoadingUser,
    }
}