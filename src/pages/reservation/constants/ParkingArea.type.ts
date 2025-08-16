export interface ParkingArea {
    rowId: number;
    name: string;
    address: string;
    remainder_count: number;
    total_count: number;
    color: string;
}

export const initParkingAreaState: ParkingArea = {
    rowId: 0,
    name: "",
    address: "",
    remainder_count: 0,
    total_count: 0,
    color: "#09f",
};

export const parkingAreaList: ParkingArea[] = [
    {
        rowId: 1,
        name: "주차창1",
        address: "대구광역시 동구 신암로 16길 17",
        remainder_count: 3,
        total_count: 20,
        color: "#09f",
    },
    {
        rowId: 2,
        name: "주차창2",
        address: "대구광역시 동구 신암로 11길 15",
        remainder_count: 1,
        total_count: 15,
        color: "#0Fe58E",
    },
    {
        rowId: 3,
        name: "주차창3",
        address: "대구광역시 동구 신암로 13길 10",
        remainder_count: 8,
        total_count: 10,
        color: "#002342",
    },
];
