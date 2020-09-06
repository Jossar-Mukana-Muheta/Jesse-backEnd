module.exports = mongoose => {
  const eventSchema = mongoose.model(
    "Event",
    mongoose.Schema(
      {
        title: String,
        imageUrl: String,
        soustitle: String,
        texte: String,
      },
      { timestamps: true }
    )
  );

  return eventSchema;
};
