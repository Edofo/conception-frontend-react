// import { useContext } from "react"
// import { CountContext } from "../contexts/CountContext"

type CountProps = {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>
}

export const Count = ({ count, setCount }: CountProps) => {
    // const data = useContext(CountContext)
    return (
        <button onClick={() => setCount(c => c + 1)}>Click here! {count}</button>
    )
}