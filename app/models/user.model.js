module.exports = mongoose => {
  const userSchema = mongoose.model(
    "User",
    mongoose.Schema(
      {
        email: String,
        password: String,
      },
      { timestamps: true }
    )
  );

  return userSchema;
};