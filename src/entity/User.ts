import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Question} from "./Question";
import {Answer} from "./Answer";
import {Question_Vote} from "./QuestionVote";
import {Answer_Vote} from "./AnswerVote";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @OneToMany(type => User, user => user.questions)
    questions: Question[]

    @OneToMany(type => User, user => user.answers)
    answers: Answer[]

    @OneToMany(type => User, user => user.question_votes)
    question_votes: Question_Vote[]

    @OneToMany(type => User, user => user.answer_votes)
    answer_votes: Answer_Vote[]

}
