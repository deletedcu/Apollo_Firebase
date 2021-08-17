const {ApolloServer} = require("apollo-server-express");

// Create graphql server
const startApolloServer = async (app, typeDefs, resolvers) => {
  const server = new ApolloServer({typeDefs, resolvers, playground: true});
  await server.start();
  server.applyMiddleware({app, path: "/", cors: true});
  await new Promise((resolve) => app.listen({port: 4000}, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
};

module.exports = startApolloServer;
