import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import authMiddleware from "./middleware/authMiddleware";
import { logger, morganMiddleware } from "@lerna-express-starter/logger";

dotenv.config();

const app = express();
const authHeaderRouter = express.Router();
const port = process.env.PORT || 2000;
const VERSION = "/v1";

app.use(morganMiddleware);
authHeaderRouter.use(authMiddleware);

app.get("/", (req: Request, res: Response) => {
  res.redirect(`${VERSION}/health`);
});

authHeaderRouter.get(`${VERSION}/health`, (req: Request, res: Response, next: NextFunction) => {
  res.json({
    status: "UP",
    message: `Running on http://localhost:${port}`,
  });
});

app.use(authHeaderRouter);

app.listen(port, () => {
  logger.debug(`⚡️Server is running at http://localhost:${port}`);
});
