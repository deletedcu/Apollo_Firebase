
const functions = require("firebase-functions");
const express = require("express");
const startApolloServer = require("./src/server");

// Construct a schema, using GraphQL schema language
const typeDefs = require("./src/schema/schema");

// Provide resolver functions for your schema fields
const resolvers = require("./src/resolvers/resolvers");

// Setup express cloud function
const app = express();

// Create graphql server
startApolloServer(app, typeDefs, resolvers);

exports.graphql = functions.https.onRequest(app);
