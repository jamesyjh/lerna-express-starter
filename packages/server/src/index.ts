import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import authMiddleware from "./middleware/authMiddleware";

dotenv.config();

const app = express();
const authHeaderRouter = express.Router();
const port = process.env.PORT || 2000;

authHeaderRouter.use(authMiddleware);

app.get("/", (req: Request, res: Response) => {
  res.redirect("/health");
});

authHeaderRouter.get(
  "/health",
  (req: Request, res: Response, next: NextFunction) => {
    res.json({
      status: "UP",
      message: `Running on http://localhost:${port}`,
    });
  },
);

app.use(authHeaderRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
