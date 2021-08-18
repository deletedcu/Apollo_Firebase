const {gql} = require("apollo-server-express");

const typeDefs = gql`
  type Country {
    country: String,
    year: String,
    area: Int,
    population: Int
  }

  input CountryInput {
    country: String!,
    year: String!,
    area: Int!,
    population: Int!
  }

  type Query {
    countries: [Country],
  }

  type Mutation {
    addCountry(input: CountryInput!): Country
  }
`;

module.exports = typeDefs;
