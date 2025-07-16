const express = require('express');
const {
  AddNewUser,
  AllClients,
  ClientLoggingIn,
} = require("../Controllers/ClientAuth.controller");

const ClientAuthRouter = new express.Router()

ClientAuthRouter.post("/client-auth-add", AddNewUser);
ClientAuthRouter.get("/all-clients", AllClients);
ClientAuthRouter.post("/client-logging-in", ClientLoggingIn);

module.exports = ClientAuthRouter;