import {useState} from "react";
import {Header} from "../../components/header/Header";
import {Map} from "../../components/map/Map";
import {Navigation} from "../../components/navigation/Navigation";
import {initReservationState} from "./dto/ReservationDto";
import {
    initParkingAreaState,
    type ParkingArea,
} from "./constants/ParkingArea.type";
import {Popup} from "./contents/Popup";

export const Reservation = () => {
    const [selectedParkingArea, setSelectedParkingArea] =
        useState<ParkingArea>(initParkingAreaState);
    const [reservationState, setReserVationState] =
        useState(initReservationState);

    const resetSelectedParkingArea = () => {
        setSelectedParkingArea(initParkingAreaState);
    };

    return (
        <section id="container">
            <Header />
            <Map
                selectedParkingArea={selectedParkingArea}
                setSelectedParkingArea={setSelectedParkingArea}
            />
            <Navigation />

            {selectedParkingArea.rowId !== 0 && (
                <Popup
                    selectedParkingArea={selectedParkingArea}
                    resetSelectedParkingArea={resetSelectedParkingArea}
                />
            )}
        </section>
    );
};
