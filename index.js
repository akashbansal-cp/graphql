import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone'
import mongoose from 'mongoose'
import {typeDefs} from './typedefs.js'
import {resolvers} from './resolvers.js'

    


const server = new ApolloServer({
    typeDefs,
    resolvers,
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
        host:process.env.URL,
        port:process.env.PORT
    }
})

console.log(`Server started at ${url}`)