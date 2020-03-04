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
  },
  item: {
    type: Schema.Types.ObjectId,
    ref: 'Item',
  },
  tracked: {
    type: Boolean,
    default: true,
  },
});

export default model<IFavoritedItemDoc>('FavoritedItem', FavoritedItemSchema);
