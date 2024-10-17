import User from "../moldes/user.model.js";
import asyncHandler from "../middleware/asyncHandler.js";

/**
 * @desc    Auth user & get token
 * @route   POST /api/users/login
 * @access  Public
 */
const authUsers = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email: email})

  if(user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }

});

/**
 * @desc    Register user
 * @route   POST /api/users/
 * @access  Public
 */
const registerUser = asyncHandler(async (req, res) => {
  res.send('Register User')
});

/**
 * @desc    Logout user / clear cookie
 * @route   POST /api/users/logout
 * @access  Private
 */
const logoutUser = asyncHandler(async (req, res) => {
  res.send('Logout User')
});

/**
 * @desc    Get user profile
 * @route   GET /api/users/profile
 * @access  Private
 */
const getUserProfile = asyncHandler(async (req, res) => {
  res.send('Get User Profile')
});

/**
 * @desc    Update user profile
 * @route   PUT /api/users/profile
 * @access  Private/Owner
 */
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send('Update User Profile')
});

/**
 * @desc    Get users
 * @route   GET /api/users
 * @access  Private/Admin
 */
const getUsers = asyncHandler(async (req, res) => {
  res.send('Get Users')
});

/**
 * @desc    Get user by ID
 * @route   GET /api/users/:id
 * @access  Private/Admin
 */
const getUserById = asyncHandler(async (req, res) => {
  res.send('Get User by id')
});

/**
 * @desc    Delete users
 * @route   DELETE /api/users/:id
 * @access  Private/Admin
 */
const deleteUser = asyncHandler(async (req, res) => {
  res.send('Delete User')
});

/**
 * @desc    Update user
 * @route   PUT /api/users/:id
 * @access  Private/Admin
 */
const updateUser = asyncHandler(async (req, res) => {
  res.send('Update User By ID')
});

export {
  authUsers,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserById,
  deleteUser,
  updateUser
}