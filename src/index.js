const { app } = require("./app");
const  {Connection}  = require('./config/db');
const  { ApolloServer } = require("apollo-server-express");
const { expressMiddleware } = require("@apollo/server/express4");


const PORT = process.env.PORT || 8080;

;
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