import { Schema, model } from "mongoose";
import { Questions } from "../interfaces/question";

const QuestionsSchema = new Schema({
    questionText: { type: String },
    idTarget: { type: Number },
    category: { type: String },
    answers: { type: Array, default: [] },
    isCorrect: { type: Number },
    selectedAnswer: { type: String }
});

export default model<Questions>("UserQuestion", QuestionsSchema);
