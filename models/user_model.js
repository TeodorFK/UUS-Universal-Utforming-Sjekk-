const { Schema, model } = require('mongoose');
const argon2 = require('argon2');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//Password Hasshing using argon2
userSchema.pre('save', async function () {
  if (!this.isModified('password')) return;
  this.password = await argon2.hash(this.password);
});

//Password verification
userSchema.methods.verifyPassword = async (candidate) => {
  try {
    return await argon2.verify(this.password, candidate);
  } catch (err) {
    return false;
  }
};

const User = model('user', userSchema);

module.exports = User;
