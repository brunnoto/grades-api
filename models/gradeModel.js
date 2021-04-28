export default (mongoose) => {
  const gradesSchema = mongoose.Schema({
    name: {
      type: String,
      require: true,
    },
    subject: {
      type: String,
      require: true,
    },
    type: {
      type: String,
      require: true,
    },
    value: {
      type: Number,
      require: true,
    },
    lastModified: {
      type: Date,
      default: Date.now(),
    },
  });

  const gradeModel = mongoose.model('grade', gradesSchema, 'grade');

  return gradeModel;
};
