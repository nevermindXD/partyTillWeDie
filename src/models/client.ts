import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ClientSchema = new Schema ({
	Name:{
		type: String,
		required:true
	},
	Lastname:{
		type:String,
		required:true
	},
	Age:{
        type: Number,
        default:18
	},
	Password:{
        type:String,
    },
    Cellphone:{
        type:Number
    },
    University:{
        type: String
    },
    Mail:{
        type:String
    },
    Password:{
        type:String
    },
    Birthday:{
        type:Date
    },
	CreationDate: {
		type: Date,
		default: Date.now()
	}
},{
	versionKey: false
});

export default mongoose.model('Client', ClientSchema);