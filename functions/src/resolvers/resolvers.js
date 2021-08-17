const admin = require("../database/database");

// Here Firebase returns an object and GraphQL is expecting an array, so we need to extract the values.

const resolvers = {
  Query: {
    countries: () =>
      admin.database().ref("countries").once("value")
          .then((snap) => snap.val())
          .then((val) => Object.keys(val).map((key) => val[key])),
  },
};

module.exports = resolvers;
