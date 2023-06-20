import {users,quotes} from './fakedb.js'

export const resolvers = {
    Query:{
        users: ()=>users,
        quotes: ()=>quotes,
    },
    user:{
        user_quotes: (parent)=>{return quotes.filter((quotes)=>quotes.author === parent.id)},
    }
}