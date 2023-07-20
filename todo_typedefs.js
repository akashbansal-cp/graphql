import { typeDefs as scalarTypeDefs } from "graphql-scalars";
import { GraphQLDate } from "graphql-scalars";



export const todo_typedefs=`
    scalar DateTime
    scalar EmailAddress
    
    type Query{
        user(sub: String): user
    }
    type user{
        sub: ID
        user_data: user_data
        tasks: [task]
    }
    type user_data{
        name: String
        email: EmailAddress
    }
    type task{
        title: String
        isCompleted: Boolean
        dueDate: DateTime
        completionDate: DateTime
    }
    type Mutation{
        addUser(sub: String, name: String, email: EmailAddress): user
    }
`