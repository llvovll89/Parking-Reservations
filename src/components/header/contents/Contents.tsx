import { Search } from "./Search";
import { Toggle } from "./Toggle";

export const Contents = () => {
    return (
        <section className="w-full flex h-[33px] justify-between items-center pl-1">
            <Toggle />
            <Search />
        </section>
    )
};