import {apiFetch} from "@/api/fetch";

export const getCryptoRates = async () =>  {
    try {
        return await  apiFetch("https://api.coinbase.com/v2/exchange-rates?currency=EUR", {
            next: { revalidate: 60 },
        })

    } catch (error) {
        console.error("Failed to fetch exchange rates:", error)
        throw new Error("Failed to fetch exchange rates. Please try again later.")
    }
}


