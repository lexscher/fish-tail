import 'dotenv/config';
import mongoose from 'mongoose';

mongoose.connect(`${process.env.MONGODB_CONNECTION_URL}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

export default db;
