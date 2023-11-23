import {
    PrimaryGeneratedColumn,
    Column, 
    Entity,
    BaseEntity,
    OneToOne
} from 'typeorm';
import { UserEntity } from './user.entity';
 

@Entity({ name: 'bookingtbl' })

export class BookingEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: number;
    
    @Column()
    wheelTypeId: number;

    @Column()
    vehicleTypeId: number;
    
    @Column()
    modelNameId: number;

    @Column()
    startDate: Date;

    @Column()
    endDate : Date;
    
    @OneToOne(()=>UserEntity,(user)=> user.id)
    user:UserEntity[]
}