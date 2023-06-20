import mongoose from 'mongoose'

await mongoose.connect("mongodb+srv://username:whatpassword@cluster0.dytix.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
.then(()=>{
    console.log('database connected')
    return server.listen({port:5000})
})
.then((res)=>{
    console.log(`Server running at ${res.url}`)
})