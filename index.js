import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone'
import mongoose from 'mongoose'
import {typedefs} from './typedefs.js'
import {resolvers} from './resolvers.js'
import {todo_typedefs} from './todo_typedefs.js'
import {todo_resolvers} from './todo_resolvers.js'

    


// const server = new ApolloServer({
//     typeDefs:typedefs,
//     resolvers,
// })
const server = new ApolloServer({
    typeDefs:todo_typedefs,
    resolvers:todo_resolvers,
})

await mongoose.connect("mongodb+srv://username:whatpassword@cluster0.dytix.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
.then(()=>{
    console.log('database connected')
})  
.catch((err)=>{
    console.log(err)
})




const {url} = await startStandaloneServer(server,{
    listen:{
        host:process.env.URL | 'localhost',
        port:process.env.PORT | 4001
    }
})

console.log(`Server started at ${url}`)