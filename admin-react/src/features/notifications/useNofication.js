import { useQuery } from "@tanstack/react-query";
import { apiGetNotification } from "../../helpers/notifications/apiGetNotification";

export function useNotification ( notificationId)
{
    const { data: notification, isPending: isLoadingNotification } = useQuery({
        queryKey: ["notifications", notificationId],
        queryFn: () => apiGetNotification(notificationId),
    });
    
    return {
        notification,
        isLoadingNotification,
    }
}