import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    text: mongoose.SchemaTypes.String,
    author: mongoose.SchemaTypes.String,
    color: mongoose.SchemaTypes.String,

    isChecked: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default mongoose.model('Entry', schema);
