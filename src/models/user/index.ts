import mongoose, { Schema, Document } from 'mongoose';

// interface
export interface IUserDoc extends Document {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  verified: boolean;
}
// User Schema (Will need to add password later)
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
  },
  verified: {
    type: Boolean,
    default: false,
  },
});

// CLASS METHODS
UserSchema.statics.findByLogin = async function(login: String) {
  // find by username
  let user = await this.findOne({ username: login });
  // if we can't find that user, we'll try to find them by email
  if (!user) user = await this.findOne({ email: login });
  //   return that user
  return user;
};

// INSTANCE METHODS
UserSchema.methods.getFullName = async function() {
    return `${this.firstName} ${this.lastName}`
}

const User = mongoose.model<IUserDoc>('User', UserSchema);
export default User;
