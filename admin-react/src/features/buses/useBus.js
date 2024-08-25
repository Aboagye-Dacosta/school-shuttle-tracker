import { useQuery } from "@tanstack/react-query";
import { apiGetBus } from "../../helpers/buses/apiGetBus";

export function useBus(busId)
{
    const {data: bus, isPending:isLoadingBus ,error } = useQuery({
        queryKey: ["bus", busId],
        queryFn: () => apiGetBus(busId),
    })

    if (error) throw new Error(error.message);


    return {
        bus,isLoadingBus
    }
}