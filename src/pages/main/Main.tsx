import {useNavigate} from "react-router-dom";
import {RESERVATION} from "../../routes/route";

export const Main = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate(RESERVATION);
    };

    return (
        <section className="w-full h-screen shadow-sm flex items-center justify-center">
            <button
                className="flex flex-col gap-1 items-center"
                onClick={handleButtonClick}
            >
                <img
                    src="/image/logo/키오스크 오픈메인_주차로고_B 1.svg"
                    className="w-[56px] h-[56px]"
                />
                <span className="text-[20px] font-bold">주차 예약 서비스</span>
            </button>
        </section>
    );
};
