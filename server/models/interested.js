import mongoose from 'mongoose';

const { Schema } = mongoose;

const InterestedSchema = new Schema({
  createdAt: { type: Date },
  updatedAt: { type: Date },
  email: { type: String, unique: true, required: true },
});

InterestedSchema.pre('save', function preUser(next) {
  const now = new Date();
  this.updatedAt = now;
  if (!this.createdAt) this.createdAt = now;

  next();
});

export default mongoose.model('Interested', InterestedSchema);
