import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { apiGetBuses } from "../../helpers/buses/apiGetBuses";

export function useBuses ()
{
    const [searchParams] = useSearchParams();

    const pageCount = Number(searchParams.get("count") ?? 10)
    const page = Number(searchParams.get("page") ?? 0);
    const status = searchParams.get("status") ?? "all";

 
    const {data: buses, isPending: isLoadingBuses,error} = useQuery({
        queryKey: ["buses" , pageCount , page , status],
        queryFn: () => apiGetBuses(pageCount,page,status)
    })

    if (error) throw new Error("sorry something happened while loading buses");

    return {
        buses,
        isLoadingBuses,
    }
}