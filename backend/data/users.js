import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: bcrypt.hashSync("123456*", 10),
    isAdmin: true
  },
  {
    name: "Pablo Gomez",
    email: "pablo@email.com",
    password: bcrypt.hashSync("123456*", 10),
    isAdmin: false
  },
  {
    name: "Teresita",
    email: "tere@email.com",
    password: bcrypt.hashSync("123456*", 10),
    isAdmin: true
  },
];

export default users
