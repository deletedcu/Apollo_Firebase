const {gql} = require("apollo-server-express");

const typeDefs = gql`
  type Country {
    Country: String,
    Year: String,
    Area: Int,
    Population: Int
  }
  type Query {
    countries: [Country],
  }
`;

module.exports = typeDefs;
