import {user_data} from './user.js'

export const resolvers = {
    Query:{
        hello: ()=>{ return "s"},
        users: async () => await user_data.find({}).skip(4).limit(20)
    }
}