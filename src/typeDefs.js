import {gql} from "apollo-server-core";

const typeDefs = gql`

    type Query {
        root: String
    }

    type Subscription {
        objectPublished(topic: String!): Output
    }

    type Mutation {
        publishObject(input: Input!): Output
    }

    type Output {
        content: String
    }

    input Input {
        topic: String
        content: String
    }

`
export default typeDefs