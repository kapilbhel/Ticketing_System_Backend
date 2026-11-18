import "dotenv/config";
import connectDB from "./db/index.js";
import app from "./app.js";

const PORT = process.env.PORT;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is listening on port : ${PORT}`)
    })
}) .catch((error) =>{
    console.log(error)
})

