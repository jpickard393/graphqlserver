// Types known to graphQL

// Query defines the main entry point to the other types.
// reviews, gaes and authors allow the user to query those types

export const typeDefs = `#graphql
    type Game {
        id: ID!
        title: String
        platform: [String!]!
        reviews: [Review!]
        highScore: Int
        category: Category
    }
    type Review {
        id: ID!
        rating: Int!
        content: String!
        game: Game!
        author: Author!
    }
    type Author {
        id: ID!
        name: String!
        verified: Boolean!
        reviews: [Review!]
    }
    
    type Query {
        reviews: [Review]
        review(id: ID!): Review
        games:[Game]
        game(id: ID!): Game
        authors:[Author]
        author(id: ID!): Author
        categories: [Category]
    }
    type Category {
        id: ID!
        name: String
    }
`

// Built in types in grapgQL
// int, float, boolean, ID