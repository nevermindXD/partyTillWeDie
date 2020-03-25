import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema ({
	Name:{
		type: String,
		required:true
	},
	Lastname:{
		type:String,
		required:true
    },
    Level:{
        type:String
    },
	Position:{
        type:String
    },
    Mail:{
      type:String  
    },
    Password:{
        type:String,
        required:true
    },
    Cellphone:{
        type:String
    },
	CreationDate: {
		type: Date,
		default: Date.now()
	}
},{
	versionKey: false
});

export default mongoose.model('User', UserSchema);