import connectDB from "./db/db_conn.js";
import "dotenv/config.js";

connectDB();

// async function connectDB() {}

/* code for practice
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`/${DB_NAME});
    app.on("error", (error)=> {
        console.log("ERROR IN EXPRESS", error)
        throw error
    })

    app.listen(process.env.PORT, () => {
        console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("ERROR: ", error);
    throw err
  }
})();

*/
