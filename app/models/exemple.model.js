module.exports = mongoose => {
  const Exemple = mongoose.model(
    "exemple",
    mongoose.Schema(
      {
        title: String,
        description: String,
        published: Boolean
      },
      { timestamps: true }
    )
  );

  return Exemple;
};

