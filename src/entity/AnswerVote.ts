import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn} from "typeorm";
import {Answer} from "./Answer";
import {User} from "./User";

@Entity()
export class Answer_Vote {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    vote_value: number;

    @Column()
    answer_id: number;

    @Column()
    user_id: number;

    @ManyToOne(type => Answer, answer => answer.answer_votes)
    @JoinColumn({name: "answer_id"})
    answer: Answer

    @ManyToOne(type => User, user => user.answer_votes)
    @JoinColumn({name: "user_id"})
    user: User

}
