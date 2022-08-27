import morgan from "morgan";
import { logger } from "./logger";

// Override the stream method by telling
// Morgan to use our custom logger instead of the console.log.
const stream: morgan.StreamOptions = {
  write: message => logger.http(message),
};

const skip = () => {
  const env = process.env.NODE_ENV || "development";
  return env !== "development";
};

// Build the morgan middleware
const morganMiddleware = morgan(":method :url :status :res[content-length] - :response-time ms", { stream, skip });

export { morganMiddleware };
