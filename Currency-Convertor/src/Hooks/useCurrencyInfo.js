import React, { useEffect, useState } from 'react'

const useCurrencyInfo = (currency) => {
    const [data,setdata]=useState({})
    console.log(currency)
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setdata(res[currency]))
        console.log(data)
    },[currency])

    return data
}

export default useCurrencyInfo