import {getCryptoRates} from "@/api/queries/get-crypto-rates";
import React from 'react';

const Page = async () => {

    const {data, error} = await getCryptoRates()

    // @ts-ignore
    console.log({data: JSON.stringify(data?.data.rates), error})

    return (
        <main className="h-full bg-red-500">

        </main>
    );
};

export default Page;