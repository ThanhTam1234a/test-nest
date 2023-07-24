
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity('store')
export class StoreEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    address: string;

}