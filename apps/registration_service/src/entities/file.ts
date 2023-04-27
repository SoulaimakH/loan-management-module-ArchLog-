import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import {Request} from "./request";

@Entity({ name: 'files' })
export class Files {
    constructor() {

    }

    /** The id file. */
    @PrimaryColumn('uuid', { primaryKeyConstraintName: 'files_pkey' })
    id: string;

    @Column()
    numRequest:string

    @Column()
    fieldname:string

    @Column()
    originalname:string

    @Column()
    mimetype:string

    @Column()
    encoding:string

    @Column()
    filename:string

    @Column()
    destination:string

    @Column()
    size:number

    @Column()
    path:string

    @ManyToOne(() => Request, (requests) => requests.files)
    requests: Request
}