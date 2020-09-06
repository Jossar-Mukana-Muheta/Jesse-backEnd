module.exports = mongoose => {
  const educationSchema = mongoose.model(
    "Education",
    mongoose.Schema(
      {
        title: String,
        imageUrl: String,
        categorie: String
      },
      { timestamps: true }
    )
  );

  return educationSchema;
};
