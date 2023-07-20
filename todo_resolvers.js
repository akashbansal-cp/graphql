import { todo_model } from "./todo_model.js";

export const todo_resolvers = {
    Query:{
        user: async (parent,args) => {
            console.log(args)
            let p =  await todo_model.find({sub:args.sub})
            console.log(p)
            return p[0];
        } 
    },
    Mutation:{
        addUser: async (parent,args) => {
            console.log(args);
            let p = await todo_model.find({sub:args.sub});
            if(p.length === 0){
                let data = {sub:args.sub, user_data:{name: args.name, email: args.email}}
                console.log(data)
                await todo_model.create(data)
                p = await todo_model.find({sub:args.sub})
            }
            console.log(p)
            return p[0];
        }
    }
}