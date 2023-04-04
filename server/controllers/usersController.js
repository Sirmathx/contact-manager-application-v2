//@ define: register user
// @route: api/users/register
// @privacy: public

const registerUser = async (req,res) =>{
    res.json({message:"User created!"});
};

//@ define: login user
// @route: api/users/login
// @privacy: public
const  loginUser = async (req,res) =>{
    res.json({message: "user loggedIn!"});
};

//@ define: all users
// @route: api/users
// @privacy: protected
const getAllUsers = async (req,res) =>{
    res.json({message:"get All users!"});
};

//@ define: get single users
// @route: api/users/:id
// @privacy: protected
const getSingleUser = async (req,res) =>{
    res.json({message:"get single user!"});
};


//@ define: update single users
// @route: api/users/:id
// @privacy: protected
const updateSingleUser = async (req,res) =>{
    res.json({message:"update single user!"});
};

//@ define: delete single users
// @route: api/users/:id
// @privacy: protected
const deletesingleuser = async (req,res) =>{
    res.json({message:"delete single user!"});
};

module.exports = { registerUser, loginUser,getAllUsers,getSingleUser,updateSingleUser,deletesingleuser};