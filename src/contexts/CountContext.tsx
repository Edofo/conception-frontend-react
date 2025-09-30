import { createContext, useContext, useState } from "react";

interface CountContextValue {
    count: number
    setCount: React.Dispatch<React.SetStateAction<number>>
}

const CountContext = createContext<CountContextValue | null>(null)

export const CountProvider = ({ children }: { children: React.ReactNode }) => {
    const [count, setCount] = useState(0)

    const value = {
        count,
        setCount
    }

    return <CountContext.Provider value={value}>{children}</CountContext.Provider>
}

export const useCountContext = () => {
    const data = useContext(CountContext)
    if (!data) {
        throw new Error("Context must inside CountContext Provider")
    }
    return data
}
