import { Document } from "mongoose";

export interface Questions extends Document {
    questionText: string;
    idTarget: number;
    category: string;
    answers: Answers[] | undefined;
    isCorrect: number;
    selectedAnswer: string;
    password: string;

}

export type Answers = {
    answer: string;
    isCorrect: boolean;
};

