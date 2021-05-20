import bcrypt from "bcryptjs";
import { Schema, model } from "mongoose";
import { NextFunction } from "express";
import { IUserModel, IUserDocument } from '../interfaces/IUser';

const salt: number = 12;


const UserSchema: Schema<IUserDocument> = new Schema ({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    createdAt:{
        type:Date,
        default:Date.now   
    },
})

UserSchema.pre<IUserDocument>("save", function(next: NextFunction) {
    let user = this;

    if(user.isModified('password')) {
        bcrypt.genSalt(10, function(err:any, salt:string){
            bcrypt.hash(user.password, salt, function(err:any, hash:string){
                if(err) return next(err);
                user.password = hash; 
                next();
            });
        });
    } else{
        return next();
    }
})


UserSchema.methods.setPassword = async function (password: string) {
    const hash = await bcrypt.hash(password,salt)
    this.password = hash
}

UserSchema.methods.checkPassword = async function (password: string) {
    const result = await bcrypt.compare(password, this.password)
    return result
}

UserSchema.statics.findByUsername = function (username: string) {
    return this.findOne({username})
}

const User = model<IUserDocument, IUserModel>("User", UserSchema)
export default User