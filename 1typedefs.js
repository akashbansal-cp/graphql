export const typeDefs = `
type Query{
        users : [user]
        quotes: [quote]
    }
    type user{
        id: ID
        firstName: String
        lastName: String
        email: String
        user_quotes:[quote]
    }
    type quote{
        quote: String
        author: Int
    }
`;