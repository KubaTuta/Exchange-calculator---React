import { useEffect, useState } from "react";

const DateAndTime = () => {
    const [myDate, setMyDate] = useState(new Date());


    useEffect(() => {
        const intervalId = setInterval(() => {
            setMyDate(new Date())
        },
            1000);
        return () => {
            clearInterval(intervalId);
        }
    },
        []);





    return (
        <p>
            Dzisiaj jest {` `}
            {myDate.toLocaleDateString(
                undefined,
                { weekday: "long", day: "numeric", month: "long", hour: "numeric", minute: "numeric", second: "numeric" }
            )}
        </p>
    );
}

export default DateAndTime;