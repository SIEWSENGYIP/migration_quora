import {Entity, PrimaryGeneratedColumn, Column,  ManyToOne, JoinColumn, OneToMany} from "typeorm";
import {Question} from "./Question";
import {User} from "./User";
import {Answer_Vote} from "./AnswerVote";

@Entity()
export class Answer {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    question_id: number;

    @Column()
    user_id: number;

    @ManyToOne(type => Question, question => question.answers)
    @JoinColumn({name: "question_id"})
    question: Question

    @ManyToOne(type => User, user => user.answers)
    @JoinColumn({name: "user_id"})
    user: User

    @OneToMany(type => Answer_Vote, Answer_vote => Answer_vote.answer)
    answer_votes: Answer_Vote[]

}
