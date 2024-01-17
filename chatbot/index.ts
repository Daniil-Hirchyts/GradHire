import express, {Application} from 'express';
import dotenv from 'dotenv';
import Chatbot from "./routes/Chatbot";
import cors from "cors"
import cookieParser from "cookie-parser"

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.use(express.json())
app.use(express.urlencoded({extended: false}));
app.use(cors({
    origin: 'http://localhost:8080',
    credentials: true,
}))
app.use(cookieParser())
app.use("/chatbot", Chatbot)

app.get("/", (req, res) => {
    res.send("Hello world 2")
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});