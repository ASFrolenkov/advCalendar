import { useEffect, useState } from "react";

import { createDate } from "./APIs/APIs";

const Content = () => {

    const [date, setDate] = useState(createDate())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(createDate())
        }, 500)
        return () => clearInterval(intervalId);
    }, [date])

    const dateStringConstrictor = ():string => `${date.timeStr.hours}:${date.timeStr.minutes}:${date.timeStr.seconds} / ${date.dateStr.day}-${date.dateStr.month}-${date.dateStr.year}`

    return (
        <div>
            {dateStringConstrictor()}
        </div>
    )
}

export default Content;