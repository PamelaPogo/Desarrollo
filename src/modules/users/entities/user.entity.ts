<<<<<<< HEAD
import {Persona} from "../../persona/entities/persona.entity";
import {Column, Entity ,OneToOne,PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    mail:string;
    
    
    @Column()
    password:string;

    @OneToOne(()=>Persona, persona=>persona.user,{cascade:true})
    persona:Persona;


=======
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
>>>>>>> 9e0e8eadbc618168f2fec4a59ccc637a435bdd6a
}
