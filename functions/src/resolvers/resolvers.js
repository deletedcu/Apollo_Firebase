const admin = require("../database/database");

// Here Firebase returns an object and GraphQL is expecting an array, so we need to extract the values.

const resolvers = {
  Query: {
    countries: () =>
      admin.database().ref("countries").once("value")
          .then((snap) => snap.val())
          .then((val) => Object.keys(val).map((key) => val[key])),
  },
  Mutation: {
    addCountry: (_, {input: country}) => {
      return new Promise((resolve, reject) => {
        const newCountryRef = admin.database().ref("countries").push();
        newCountryRef.set(country, (err) => {
          if (err) {
            console.log(err);
            reject(err);
          } else {
            resolve(country);
          }
        });
      });
    },
  },
};

module.exports = resolvers;
