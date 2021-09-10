import dotenv from 'dotenv';
import users from './data/users.js';
import dentists from './data/dentists.js';
import User from './models/userModel.js';
import Dentist from './models/dentistModel.js';
import connectDB from './config/db.js';

dotenv.config()
connectDB()

const importData = async () => {
  try {
    await User.insertMany(users)
    await Dentist.insertMany(dentists)
    console.log('Data Imported!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await User.deleteMany()
    await Dentist.deleteMany()

    console.log('Data Destroyed!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}