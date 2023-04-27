import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn} from 'typeorm';
import {Files} from "./file";

@Entity()
export class Request {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    loanAmount: string;

    @Column()
    loanType: string;

    @Column()
    loanPurpose: string;

    @OneToMany(() => Files, (Files) => Files.requests)
    @JoinColumn([
        {foreignKeyConstraintName: "request_file_fkey" },
    ])
    files: Files[]
}
