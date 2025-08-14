import {useNavigate} from "react-router-dom";
import {ACCOUNT, FAVORITES, RESERVATION, SHARE} from "../../../routes/route";
import {getActiveTextColor} from "../../../utils/getActiveTextColor";

const navigationList = [
    {
        id: 1,
        icon: "/image/icon/예약 1.svg",
        title: "예약하기",
        path: RESERVATION,
    },
    {
        id: 2,
        icon: "/image/icon/Star 1.svg",
        title: "즐겨찾기",
        path: FAVORITES,
    },
    {
        id: 3,
        icon: "/image/icon/주차장 공유 3.svg",
        title: "주차장 공유",
        path: SHARE,
    },
    {
        id: 4,
        icon: "/image/icon/내정보 1.svg",
        title: "내 정보",
        path: ACCOUNT,
    },
];

export const List = () => {
    const navigate = useNavigate();
    const moveLink = (path: string) => {
        navigate(path);
    };

    return (
        <ul className="w-full flex h-full items-center">
            {navigationList.map((item) => (
                <li
                    key={item.id}
                    onClick={() => moveLink(item.path)}
                    className="w-full h-full flex flex-col items-center justify-center gap-1 cursor-pointer"
                >
                    <img src={item.icon} alt={item.title} />
                    <span
                        className={`${getActiveTextColor(item.path)} text-xs`}
                    >
                        {item.title}
                    </span>
                </li>
            ))}
        </ul>
    );
};
