import "./style.css";
import { useCurrentDate } from "../../useCurrentDate";

const DateAndTime = () => {

    const date = useCurrentDate();

    return (
        <p className="clock">
            Dzisiaj jest {` `}
            {date.toLocaleDateString(
                undefined,
                { weekday: "long", day: "numeric", month: "long", hour: "numeric", minute: "numeric", second: "numeric" }
            )}
        </p>
    );
};

export default DateAndTime;