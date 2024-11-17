import ChildZone from "./ChildZone";
import FindUs from "./FindUs";
import LoginInfo from "./LoginInfo";

const RightSide = () => {
    return (
        <div className="">
            <LoginInfo></LoginInfo>
            <FindUs></FindUs>
            <ChildZone></ChildZone>
        </div>
    );
};

export default RightSide;