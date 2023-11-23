import {
    Entity,
    BaseEntity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne
} from 'typeorm'
import { BookingEntity } from './booking.entity';


@Entity({ name: 'usertbl' })
export class UserEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @OneToOne(() => BookingEntity, (bookings) => bookings.id)
    bookings: BookingEntity[];

}


