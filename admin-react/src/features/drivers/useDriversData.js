import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { apiGetDrivers } from "../../helpers/drivers/apiGetDrivers";

export function useDriversData ()
{
    const [searchParams] = useSearchParams();

    const pageCount = Number(searchParams.get("count") ?? 10)
    const page = Number(searchParams.get("page") ?? 0);

 
    const {data: drivers, isPending: isLoadingDrivers,error} = useQuery({
        queryKey: ["drivers" , pageCount , page ],
        queryFn: () => apiGetDrivers(),
        select:(data) => data.filter(user => user.role == "driver")
    })

    if (error) throw new Error("sorry something happened while loading Drivers");

    return {
        drivers,
        isLoadingDrivers,
    }
}