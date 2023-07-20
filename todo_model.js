import mongoose from "mongoose";

export const todo_model = mongoose.model('todo',{
    sub: String,
    user_data:{
        name: String,
        email: String
    },
    tasks: [{
        title: String,
        isCompleted: Boolean,
        dueDate: Date,
        completionDate: Date,
    }]  
})