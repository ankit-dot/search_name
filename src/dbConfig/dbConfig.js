import mongoose from "mongoose";
import dummyUserData from "../../dummyData";
import User from "@/models/userName";

export async function connect(){
    try {

        console.log(process.env.MONGO_URL);
        mongoose.connect("mongodb+srv://ankitsolanki61375:Password9399@cluster0.jv90wht.mongodb.net/");
        const connection  = mongoose.connection;

        connection.on('connected', () => {
            console.log('MongoDB connected');
        })
        
        connection.on('error', (error) => {
            console.log('Mongodb connection error' + error)
            
        })
        await seedUsers();
    } catch(error) {
        console.log('Something went wrong in connecting to DB'+ error)
    }

}


async function seedUsers() {
    const usersCount = await User.countDocuments();
    if(usersCount > 0) {
        console.log("Users seed is already done!");
        return
    }

    for (let user  of dummyUserData) {
        await User.create(user);
        
    }

    console.log("Users seed is done");
}