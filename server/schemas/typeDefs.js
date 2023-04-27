const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type FormRes {
        _id: ID
        name: String
        email: String
        message: String
        createdAt: String
    }
    type Query {
        formRes: [FormRes]
    }

    type Mutation {
        postFormRes(name: String!, email: String!, message: String!): FormRes
    }
`;

module.exports = typeDefs;
