import 'dotenv/config';
import mongoose from 'mongoose';

mongoose
  .connect(`${process.env.MONGODB_CONNECTION_URL}`, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .catch(console.warn);

// START DB CONNECTION
const db = mongoose.connection;

export default db;
