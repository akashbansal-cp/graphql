import {user_data} from './user.js'

export const resolvers = {
    Query:{
        users: async(parent,{tgid})=>{
            return await user_data.find({tgid:tgid})
        }
    }
}