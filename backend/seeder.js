import colors from "colors";
import mongoose from "mongoose";
import users from "./data/users.js";
import products from "./data/products.js";

import connectDB from "./config/db.js";
import User from "./moldes/user.model.js";
import Order from "./moldes/order.model.js";
import Product from "./moldes/product.model.js";

const importData = async () => {
  try {
    await connectDB();
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    
    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;
    
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts);
    process.exit();

    console.log("Data imported!".green.inverse);
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await connectDB();
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
  } catch (error) {
    console.error(`${error}`.red.inverse)
    console.error(error)
    process.exit(1)
  }
};

if(process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
