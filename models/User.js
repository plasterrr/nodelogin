const mongoose = require("mongoose");
const PERMISSIONS = {
  USER: 'user',
  ADMIN: 'admin'
}

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    permissions: {
      type: String,
      required: false,
      default: PERMISSIONS.USER,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },

  {
    methods: {
      isAdmin() {
        return (PERMISSIONS.ADMIN === this.permissions);
      }
    }
  }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;