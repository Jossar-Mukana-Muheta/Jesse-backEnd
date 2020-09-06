module.exports = mongoose => {
  const solidariteSchema = mongoose.model(
    "Solidarite",
    mongoose.Schema(
      {
        title: String,
        imageUrl: String,
        categorie: String
      },
      { timestamps: true }
    )
  );

  return solidariteSchema;
};
