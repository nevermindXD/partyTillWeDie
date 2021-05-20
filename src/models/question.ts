import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
import { Questions } from "../interfaces/question";

const salt: number = 12;

const QuestionsSchema = new Schema({
    questionText: { type: String },
    idTarget: { type: Number },
    category: { type: String },
    answers: { type: Array, default: [] },
    isCorrect: { type: Number },
    selectedAnswer: { type: String },
    password: {
        type: String,
        required: true,
      }
});

QuestionsSchema.pre('save', function (this: Questions, next: (err?: Error | undefined) => void) {
    // * Make sure you don't hash the hash
    if (!this.isModified('password')) {
      return next();
    }
    bcrypt.hash(this.password, salt, (err: Error, hash: string) => {
      if (err) return next(err);
      this.password = hash;
    });
  });

  QuestionsSchema.methods.comparePasswords = function (
    candidatePassword: string,
    next: (err: Error | null, same: boolean | null) => void,
  ) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
      if (err) {
        return next(err, null);
      }
      next(null, isMatch);
    });
  };
  
  

export default model<Questions>("UserQuestion", QuestionsSchema);
