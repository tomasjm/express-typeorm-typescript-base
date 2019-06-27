import { ApolloServer, gql } from "apollo-server-express";

export class GraphQLServer {
  private typeDefs!: any;
  private resolvers!: any;
  private apolloServer!: ApolloServer;
  constructor(expressApp: any) {
    this.typeDefs = gql`
      type Query {
        hello: String
      }
    `;
    this.resolvers = {
      Query: {
        hello: () => "Hello world!"
      }
    };
    this.apolloServer = new ApolloServer({
      typeDefs: this.typeDefs,
      resolvers: this.resolvers
    });
    this.apolloServer.applyMiddleware({ app: expressApp });
    console.log("GraphqlServer & ApolloServer habilitado");
  }
}
