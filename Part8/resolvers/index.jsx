const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');
const Book = require('./models/book');
const Author = require('./models/author');
const User = require('./models/user');

const resolvers = {
  Query: {
    bookCount: () => Book.collection.countDocuments(),
    authorCount: () => Author.collection.countDocuments(),
    allBooks: async (root, args) => {
      let filter = {};
      if (args.author) {
        const author = await Author.findOne({ name: args.author });
        if (author) {
          filter.author = author._id;
        }
      }
      if (args.genre) {
        filter.genres = args.genre;
      }
      return Book.find(filter).populate('author');
    },
    allAuthors: async () => {
      const authors = await Author.find({});
      return authors.map(async (author) => ({
        name: author.name,
        born: author.born,
        bookCount: await Book.countDocuments({ author: author._id }),
      }));
    },
    me: (root, args, context) => {
      return context.currentUser;
    },
  },

  Mutation: {
    addBook: async (root, args, context) => {
      if (!context.currentUser) {
        throw new GraphQLError('Authentication required');
      }

      let author = await Author.findOne({ name: args.author });
      if (!author) {
        author = new Author({ name: args.author });
        await author.save();
      }

      const book = new Book({ ...args, author: author._id });
      try {
        await book.save();
      } catch (error) {
        throw new GraphQLError(error.message);
      }

      return book.populate('author');
    },

    editAuthor: async (root, args, context) => {
      if (!context.currentUser) {
        throw new GraphQLError('Authentication required');
      }

      const author = await Author.findOne({ name: args.name });
      if (!author) {
        return null;
      }

      author.born = args.setBornTo;
      try {
        await author.save();
      } catch (error) {
        throw new GraphQLError(error.message);
      }

      return author;
    },

    createUser: async (root, args) => {
      const user = new User({ username: args.username, favoriteGenre: args.favoriteGenre });
      try {
        await user.save();
      } catch (error) {
        throw new GraphQLError(error.message);
      }

      return user;
    },

    login: async (root, args) => {
      const user = await User.findOne({ username: args.username });
      if (!user || args.password !== 'hardcodedpassword') {
        throw new GraphQLError('Invalid credentials');
      }

      const userForToken = {
        username: user.username,
        id: user._id,
      };

      return { value: jwt.sign(userForToken, process.env.JWT_SECRET) };
    },
  }
};

module.exports = resolvers;
