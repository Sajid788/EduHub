const typeDefs = `
type User {
    id: ID!
    email: String!
    name: String
    password: String
    role: String!
    accessToken: String
}

type Book {
    id: ID!
    title: String!
    author: String!
    genre: String!
    price: String!
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

    addBook(title: String!, author: String!, genre: String!, price: String!): Book!
    updateBook(id: ID!, title: String!, author: String!, genre: String!, price: String!): Book!
    deleteBook(id: ID!): Book!
}

`;

module.exports = typeDefs;