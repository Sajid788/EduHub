const typeDefs = `
type User {
    id: ID!
    email: String!
    name: String
    password: String
    role: String!
    accessToken: String
    books:[Book]
}

type Book {
    id: ID!
    title: String!
    author: String!
    discription: String!
    price: Float!
  }

type Query {
    users: [User]
    user(id: ID!): User
}

type Query {
    Books: [Book]!
    Book(id: ID!): Book
 }


type Mutation {
    createUser(email: String!, name: String!, password: String!, role: String!): User
    loginUser(email: String!, password: String!): User
    passwordChange(id: ID!, oldPassword: String, newPassword: String): User
    deleteUser(id: ID!): User
    Borrowbook(userId: ID!, bookId: ID!): User
    

    createBook(title: String!, author: String!,discription : String!, price: Float!): Book!
    updateBook(id: ID!, title: String!, author: String!, discription: String!, price: Float!): Book!
    deleteBook(id: ID!): Book!
}

`;

module.exports = typeDefs;