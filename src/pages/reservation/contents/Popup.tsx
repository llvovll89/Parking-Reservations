import {useEffect, useState} from "react";
import type {ParkingArea} from "../constants/ParkingArea.type";

interface Props {
    selectedParkingArea: ParkingArea;
    resetSelectedParkingArea: () => void;
}

export const Popup = ({
    selectedParkingArea,
    resetSelectedParkingArea,
}: Props) => {
    const [step, setStep] = useState(0);
    const [carNumber, setCarNumber] = useState(["", "", "", ""]);

    const handleInputChange = (index: number, value: string) => {
        const updatedInputs = [...carNumber];
        updatedInputs[index] = value;
        setCarNumber(updatedInputs);
    };

    useEffect(() => {
        if (carNumber.every((car) => car !== "")) {
            setStep(2);
        }
    }, [carNumber]);

    return (
        <article className="absolute bottom-[100px] p-4 w-[340px] h-[230px] flex flex-col gap-2 rounded-tr-[14px] rounded-tl-[14px] bg-white">
            <div className="w-full h-[22px] flex justify-end items-center">
                <button
                    onClick={resetSelectedParkingArea}
                    className="text-md w-[24px]"
                >
                    X
                </button>
            </div>

            <div className="w-full h-[47px] flex items-center justify-between pl-4 pr-2">
                <div className="flex gap-2 items-center">
                    <span
                        className="w-[30px] h-[30px] rounded-full text-white flex items-center justify-center"
                        style={{
                            background: `${selectedParkingArea.color}`,
                        }}
                    >
                        P
                    </span>
                    <div className="flex flex-col gap-1 text-xs">
                        <span className="font-bold">
                            {selectedParkingArea.name}
                        </span>
                        <span className="text-gray-400 text-[10px]">
                            {selectedParkingArea.address}
                        </span>
                    </div>
                </div>

                <div className="text-xs flex flex-col gap-1 items-end">
                    <span className="font-bold">현재 주차현황</span>
                    <span className="text-gray-400">
                        잔여 {selectedParkingArea.remainder_count}대 /{" "}
                        {selectedParkingArea.total_count}대
                    </span>
                </div>
            </div>
            {step === 0 && (
                <div className="w-[242px] m-auto flex flex-col gap-10 items-center">
                    <ul className="grid grid-cols-4 w-full h-[50px] gap-[15px] mx-auto">
                        {carNumber.map((car, i) => (
                            <li key={i} className="bg-gray-200">
                                <input
                                    type="number"
                                    className="w-full h-full bg-gray-200 pl-2"
                                    value={car}
                                    onChange={(e) =>
                                        handleInputChange(i, e.target.value)
                                    }
                                />
                            </li>
                        ))}
                    </ul>
                    <span className="text-gray-300 text-xs">
                        차량번호 뒷자리를 입력해 주세요
                    </span>
                </div>
            )}
        </article>
    );
};
