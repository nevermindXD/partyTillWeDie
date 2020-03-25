import { Model, Document } from "mongoose";

export interface Questions extends Document {
    questionText: String;
    idTarget: Number;
    category: String;
    answers: Answers[] | undefined;
    isCorrect: Number;
    selectedAnswer: String;

}

export type Answers = {
    answer: String;
    isCorrect: Boolean;
};
