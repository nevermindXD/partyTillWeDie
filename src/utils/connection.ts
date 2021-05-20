import mongoose from 'mongoose';

export const mongooseConnection = (URI: any) => {
    mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => {
        console.log(`Connected to db: ${URI} successfully via MONGOOSE`);
    }).catch((err: any) => {
        console.log(`MongoDB connection error. Please make sure MongoDB is running. Error: ${err}`);
        process.exit(1);
    });
};