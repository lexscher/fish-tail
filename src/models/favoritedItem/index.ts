import { Schema, Document, model } from 'mongoose';

export interface IFavoritedItemDoc extends Document {
  user: Object;
  item: Object;
  tracked: boolean;
}

const FavoritedItemSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  item: {
    type: Schema.Types.ObjectId,
    ref: 'Item',
    required: true,
  },
  tracked: {
    type: Boolean,
    default: true,
  },
});

export default model<IFavoritedItemDoc>('FavoritedItem', FavoritedItemSchema);
