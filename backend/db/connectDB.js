import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();





export const connectDB = async () => {
	try {
		console.log("mongo_uri: ", 'mongodb+srv://eyeoverthink:EyeWillWin2025!@caster.uelg8.mongodb.net/?retryWrites=true&w=majority&appName=caster');
		const conn = await mongoose.connect('mongodb+srv://eyeoverthink:EyeWillWin2025!@caster.uelg8.mongodb.net/?retryWrites=true&w=majority&appName=caster');
		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.log("Error connection to MongoDB: ", error.message);
		process.exit(1); // 1 is failure, 0 status code is success
	}
};
