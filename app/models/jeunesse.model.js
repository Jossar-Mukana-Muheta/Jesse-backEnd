module.exports = mongoose => {
  const jeunesseSchema = mongoose.model(
    "Jeunesse",
    mongoose.Schema(
      {
        title: String,
        imageUrl: String,
        categorie: String
      },
      { timestamps: true }
    )
  );

  return jeunesseSchema;
};
