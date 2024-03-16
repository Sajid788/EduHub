const { app } = require("./app");
const { Connection } = require("./config/db");
const { ApolloServer } = require("apollo-server-express");
const { expressMiddleware } = require("@apollo/server/express4");
const { typeDefs, resolvers } = require("./graphql/master");
const {authentication} = require('./middleware/auth.middleware')

const PORT = process.env.PORT || 8080;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req, res }) => {
    const user = await authentication(req, res).catch((err) => console.log(err));
    return { req, res, user };
  },
});

Connection()
  .then(async () => {
    await server.start();
    server.applyMiddleware({ app });
    app.listen(PORT, () => {
      console.log(`Server is live on port. ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error while connect DB", error);
  });
