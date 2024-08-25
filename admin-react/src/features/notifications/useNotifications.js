import { useQuery } from "@tanstack/react-query";
import { apiGetNotifications } from "../../helpers/notifications/apiGetNotifications";

export function useNotifications ()
{
    const { data: notifications,isPending: isLoadingNotifications} = useQuery({
        queryKey: ["notifications"],
        queryFn: apiGetNotifications,
    })

    return {
        notifications,
        isLoadingNotifications,
    }
}