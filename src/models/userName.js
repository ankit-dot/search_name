
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  user_name: {
    type: String,
    required: true
  },
  user_age: {
    type: Number,
    required: true
  },
  user_job: {
    type: String,
    required: true
  }
});

const User = mongoose.models.Users || mongoose.model('Users', userSchema);

export default User;