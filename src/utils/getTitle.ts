import {ACCOUNT, FAVORITES, SHARE} from "../routes/route";

export const getTitle = (path: string): string => {
    switch (path) {
        case FAVORITES:
            return "즐겨찾기";
        case SHARE:
            return "주차장 공유";
        case ACCOUNT:
            return "내 정보";
        default:
            return "예약하기";
    }
};
