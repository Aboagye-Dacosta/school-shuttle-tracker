import { useQuery } from "@tanstack/react-query";
import { apiGetUsers } from "../../helpers/users/apiGetUsers";

export function useUsers ()
{
    const {data: users,isPending: isLoadingUsers } = useQuery({
        queryKey: ["users"],
        queryFn: apiGetUsers,
        select: (data) => data.filter(user => user?.role === "student")
    })

    return {
        users,isLoadingUsers
    }
}