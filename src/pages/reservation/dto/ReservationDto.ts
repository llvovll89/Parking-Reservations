import {CarType} from "../constants/CarType.type";

export interface ReservationDto {
    parking_lot_name: string;
    reservation_name: string;
    car_type: CarType;
    vehicle_number: number;
}

export const initReservationState: ReservationDto = {
    parking_lot_name: "",
    reservation_name: "",
    car_type: CarType.K3,
    vehicle_number: 0,
};
