import { ReservationService } from './reservation.service';
export declare class ReservationController {
    private readonly reservationService;
    constructor(reservationService: ReservationService);
    getReservedTimeByDate(date?: Date): Promise<any>;
    deleteOne(ID: number): Promise<import("typeorm").DeleteResult>;
<<<<<<< HEAD
=======
    getDog(id: number): Promise<import("./entities/reservation.entity").Reservation[]>;
    createReservation(reservationData: any): Promise<import("./DTO/create.reservation.dto").CreateReservationDto & import("./entities/reservation.entity").Reservation>;
>>>>>>> develop
}
