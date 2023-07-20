export const typedefs = `
    type Query{
        users(tgid:ID): [_user]
    }
    type _user{
        tgid: ID
        user: user
        freeCreditUsed: Boolean
        freeCreditDate: String
        boughtCredit: Float
    }
    type user{
        id: ID
        is_bot: Boolean
        first_name: String
        username: String
        language_code: String
    }
`