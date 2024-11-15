import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    email: { type: "string", require: true, uniique: true },
    username: { type: "string", require: true, unique: true },
    password: { type: "string", require: true, unique: true },
  },
  {
    timestamps: true,
  }
);

const User = models.User || model("User", UserSchema);

export default User;
