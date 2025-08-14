import {useLocation, useNavigate} from "react-router-dom";
import {getTitle} from "../../utils/getTitle";
import {Contents} from "./contents/Contents";

export const Header = () => {
    const navigate = useNavigate();
    const pathName = useLocation().pathname;
    const backHistory = () => {
        navigate(-1);
    };

    return (
        <header className="w-full h-[85px] flex flex-col gap-2">
            <section className="w-full p-2 h-11 flex items-center justify-between">
                <button onClick={backHistory}>
                    <img src="/image/icon/뒤로가기 버튼.svg" alt="뒤로가기" />
                </button>
                <span className="font-bold text-sm">{getTitle(pathName)}</span>
                <button>
                    <img
                        src="/image/icon/다른사람에게 공유하기.svg"
                        alt="다른사람에게 공유하기"
                    />
                </button>
            </section>

            <Contents />
        </header>
    );
};
