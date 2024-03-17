const { RegisterUser, LoginUser,passwordChange,getUserProfile, DeleteUser,getAllUser,Borrowbook} = require("../controller/userController");
const authorization = require("../middleware/authorization.middleware");
const {
  createBook,
  updateBook,
  deleteBook,
  getAllBooks,
  getSingleBook
} = require("../controller/bookcontroller");

const resolvers = {
  Query: {
    users: async () => {
      return await getAllUser();
    },
    user: async (_, { id }) => {
      return await getUserProfile(id);
    },

    Books: async () => {
      return await getAllBooks();
    },
    Book: async (_, { id }) => {
      return await getSingleBook(id);
    },
  },

  Mutation: {
    createUser: async (_, { email, name, password, role }) => {
      return await RegisterUser({ email, name, password, role });
    },
    loginUser: async (_, { email, password }) => {
      return await LoginUser({ email, password });
    },

    passwordChange: async (_, { id, oldPassword, newPassword }) => {
      return await passwordChange({ id, oldPassword, newPassword });
    },
    deleteUser: async (_, { id }) => {
      return await DeleteUser(id);
    },
    
    Borrowbook: async (_, {userId, bookId}, context) => {
      if(context.user){
          return await Borrowbook({userId,bookId})
      }
    },

    createBook: async (_, { title, author, discription, price }, context) => {
      if (!authorization(context, "Admin")) {
        return await createBook({ title, author, discription, price });
      }
    },
    updateBook: async (
      _,
      { id, title, author, discription, price },
      context
    ) => {
      if (!authorization(context, "Admin")) {
        return await updateBook({ id, title, author, discription, price });
      }
    },
    deleteBook: async (_, { id }, context) => {
      if (!authorization(context, "Admin")) {
        return await deleteBook(id);
      }
    },
  },
};

module.exports = resolvers;
