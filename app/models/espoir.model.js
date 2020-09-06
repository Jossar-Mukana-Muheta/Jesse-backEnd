module.exports = mongoose => {
  const espoirSchema = mongoose.model(
    "Espoir",
    mongoose.Schema(
      {
        title: String,
        imageUrl: String,
        categorie: String
      },
      { timestamps: true }
    )
  );

  return espoirSchema;
};