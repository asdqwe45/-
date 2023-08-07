import { Repository } from 'typeorm';
import { Reservation } from './entities/reservation.entity';
export declare class ReservationService {
    private reservationRepository;
    constructor(reservationRepository: Repository<Reservation>);
    getReservedTimeByDate(date: Date): Promise<string[]>;
    isValidDate(date: Date): boolean;
    deleteOne(ID: number): Promise<import("typeorm").DeleteResult>;
}
