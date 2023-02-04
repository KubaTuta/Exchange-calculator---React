
import { useCurrentDate } from "../../useCurrentDate";
import { P } from "./styled";

const DateAndTime = () => {

    const date = useCurrentDate();

    return (
        <P>
            Dzisiaj jest {` `}
            {date.toLocaleDateString(
                undefined,
                { weekday: "long", day: "numeric", month: "long", hour: "numeric", minute: "numeric", second: "numeric" }
            )}
        </P>
    );
};

export default DateAndTime;