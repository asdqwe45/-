import { Repository } from 'typeorm';
import { Reservation } from './entities/reservation.entity';
import { CreateReservationDto } from './DTO/create.reservation.dto';
export declare class ReservationService {
    private reservationRepository;
    constructor(reservationRepository: Repository<Reservation>);
    getReservedTimeByDate(date: Date): Promise<any>;
    isValidDate(date: Date): boolean;
    deleteOne(ID: number): Promise<import("typeorm").DeleteResult>;
    getOneByDogID(id: number): Promise<Reservation[]>;
    createReservation(reservationData: CreateReservationDto): Promise<CreateReservationDto & Reservation>;
}
