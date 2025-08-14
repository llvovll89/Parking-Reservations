import {Account} from "../pages/account/Account";
import {Favorites} from "../pages/favorites/Favorites";
import {Main} from "../pages/main/Main";
import {Reservation} from "../pages/reservation/Reservation";
import {Share} from "../pages/share/Share";
import {FAVORITES, MAIN, RESERVATION, SHARE, ACCOUNT} from "./route";

export const routes = [
    {path: MAIN, component: Main},
    {path: RESERVATION, component: Reservation},
    {path: FAVORITES, component: Favorites},
    {path: SHARE, component: Share},
    {path: ACCOUNT, component: Account},
];
