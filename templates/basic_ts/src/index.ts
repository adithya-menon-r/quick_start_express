import "dotenv/config";
import express, { Request, Response } from "express";

const app = express();
const port: number = parseInt(process.env.SERVER_PORT as string, 10) || 8080;

// app.use(express.json()); // Uncomment to enable parsing application/json from request.
// app.use(express.urlencoded({ extended: true })); // Uncomment to enable parsing application/x-www-form-urlencoded from request.

app.get("/", (_: Request, res: Response): Response => {
    return res.status(200).send("Hello from Express Typescript!!");
});

app.listen(port, (): void => {
    console.log(`[INFO]: Server running on http://localhost:${port}`);
});

export default app;
