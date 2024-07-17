import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema.js';
import db from './_db.js'

// need resolver function for each thing they can query, including the query
const resolvers = {
    Query: {
        games() { return db.games},
        game(_, args){ return db.games.find((game) => game.id === args.id)},
        reviews() {return db.reviews},
        authors() {return db.authors},
        review(_,args){ 
            return db.reviews.find((review) => review.id === args.id)
        }
    }
}

const server = new ApolloServer({
    typeDefs, // apollo knows about these types
    resolvers  // handle incoming request and return data to the client based on schema and type
})

const {url} = await startStandaloneServer(server, {
    listen: {port: 4000}
})

console.log('server ready')