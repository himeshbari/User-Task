import  mongoose  from "mongoose";
const connectDb = async () => {
  try {
    // mongoose.connect('mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority', {

    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`Mongodb Connected ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error : ${error.message}`);
    process.exit(1);
  }
};

export default connectDb;
