import type React from "react";
import {
    parkingAreaList,
    type ParkingArea,
} from "../../pages/reservation/constants/ParkingArea.type";

interface Props {
    selectedParkingArea?: ParkingArea;
    setSelectedParkingArea?: React.Dispatch<React.SetStateAction<ParkingArea>>;
}

export const Map = ({selectedParkingArea, setSelectedParkingArea}: Props) => {
    // 주차장 좌표가 비율로 주어졌다고 가정하여, 랜덤 또는 계산된 값으로 위치 설정
    const generatePosition = (index: number) => {
        const x = (index * 25) % 100; // X 위치는 0~100% 사이
        const y = (index * 10) % 100; // Y 위치는 0~100% 사이
        return {x, y};
    };

    const selectedArea = (parkingArea: ParkingArea) => {
        if (selectedParkingArea && setSelectedParkingArea) {
            setSelectedParkingArea(parkingArea);
        }
    };

    return (
        <section className="w-full h-[calc(100vh-212px)] bg-[#09f] bg-opacity-20 rounded-[5px] relative">
            {parkingAreaList.map((p, i) => {
                const {x, y} = generatePosition(i);

                return (
                    <button
                        onClick={() => selectedArea(p)}
                        key={p.rowId}
                        className={`absolute w-[36px] h-[36px] rounded-full p-2 flex items-center justify-center`}
                        style={{
                            top: `${y}%`,
                            left: `${x}%`,
                            background: `${p.color}`,
                        }}
                    >
                        <span className="w-[50%] h-[50%] text-xs bg-white rounded-full flex items-center justify-center font-bold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            p
                        </span>
                    </button>
                );
            })}
        </section>
    );
};
