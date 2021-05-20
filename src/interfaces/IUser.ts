import mongoose, { Schema, Document, Model } from "mongoose"

export interface IUser {
    username: string;
    password: string;
    createdAt: Date;
}

export interface IUserDocument extends IUser, Document {
    setPassword: ( password: string ) => Promise<void>
    checkPassword: (password:  string) => Promise<boolean>
}

export interface IUserModel extends Model<IUserDocument> {
    findByUsername: (username: string) => Promise<IUserDocument>
}