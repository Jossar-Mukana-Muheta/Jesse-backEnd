module.exports = mongoose => {
  const santeSchema = mongoose.model(
    "Sante",
    mongoose.Schema(
      {
        title: String,
        imageUrl: String,
        categorie: String
      },
      { timestamps: true }
    )
  );

  return santeSchema;
};
