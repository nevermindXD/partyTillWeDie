import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ReservationSchema = new Schema ({
	Client:[{
		type: Schema.Types.ObjectId,
		ref: 'Client'
	}],
    Mens:{
        type: Number
    },
    Woman:{
        type: Number
    },
    Observations:{
        type: String
    },
    Day:{
        type: Date
    },
    CheckIn:{
        type: Date
    },
    Courtesy:{
        type: Number
    },
    ReservationStatus:{
        type: String
    },
	CreationDate: {
		type: Date,
		default: Date.now()
	}
},{
	versionKey: false
});

export default mongoose.model('Reservation', ReservationSchema);