import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://humblebanda7:shardool912k4@cluster0.guo8o.mongodb.net/food-del').then(()=>console.log("DB Connected"));  
}