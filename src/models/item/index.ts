import mongoose, { Schema, Document } from 'mongoose';

const ItemSchema = new Schema({
  apiId: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
  },
  lastUpdate: {
    type: Number,
    required: false,
  },
  isFeatured: {
    type: Boolean,
    required: false,
  },
  isRefundable: {
    type: Boolean,
    required: false,
  },
  cost: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  description: {
    type: String,
    required: false,
    trim: true,
    lowercase: true,
  },
  type: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  rarity: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  iconImage: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  featuredImage: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  backgroundImage: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  informationImage: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  obtainedType: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  avgStarts: { 
      type: Number,
      required: false,
   },
  totalPoints: { 
      type: Number,
      required: false,
   },
  numberVotes: { 
      type: Number,
      required: false,
   },
});
