module.exports = mongoose => {
  const projetSchema = mongoose.model(
    "Projet",
    mongoose.Schema(
      {
        title: String,
        imageUrl: String,
        description: String,
        date: String
      },
      { timestamps: true }
    )
  );

  return projetSchema;
};
