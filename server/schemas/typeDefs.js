const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Book {
        authors: [String]
        description: String!
        bookId: ID!
        image: String
        link: String
        title: String!  
    }

    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        savedBooks: [Book]
    }
    
    type Query {
        me: User
    }

    type Auth {
        token: ID!
        user: User
    }
    
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String! email: String!, password: String!) : Auth
        saveBook(savedBooks: bookData) : User
        removeBook(savedBooks: bookData) : User
    }

    `;

    module.exports = typeDefs;