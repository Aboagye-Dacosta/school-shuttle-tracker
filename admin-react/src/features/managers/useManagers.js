import { useQuery } from "@tanstack/react-query";
import { apiGetManagers } from "../../helpers/managers/apiGetManagers";

export function useManagers ()
{
    const { data: managers, isPending: isLoadingManagers } = useQuery({
        queryKey: ["managers"],
        queryFn: apiGetManagers,
        select: (data) => data.filter(manager=> ["admin", "manager"].includes(manager.role))
    });


    return {
        managers,isLoadingManagers
    }

}