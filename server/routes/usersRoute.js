const express = require("express");
const usersRoute = express.Router();

//importing userController
const {registerUser,loginUser,getAllUsers,getSingleUser,updateSingleUser,deletesingleuser} = require("../controllers/usersController");

//@ define: register user
// @route: api/users/register
// @privacy: public
usersRoute.post("/register", registerUser);

//@ define: login user
// @route: api/users/login
// @privacy: public
usersRoute.post("/login",loginUser);

//@ define: all users
// @route: api/users
// @privacy: protected
usersRoute.get("/",getAllUsers);

//@ define: get single users
// @route: api/users/:id
// @privacy: protected
usersRoute.get("/:id",getSingleUser);

//@ define: update single users
// @route: api/users/:id
// @privacy: protected
usersRoute.put("/:id",updateSingleUser);

//@ define: delete single users
// @route: api/users/:id
// @privacy: protected
usersRoute.delete("/:id",deletesingleuser);


module.exports = usersRoute;