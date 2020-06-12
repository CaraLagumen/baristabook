import path from "path";
import express, { Application, Request, Response, NextFunction } from "express";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoSanitize from "express-mongo-sanitize";
//@ts-ignore
import xss from "xss-clean";
import compression from "compression";

import drinkRouter from "./routes/drinkRoutes";
import userRouter from "./routes/userRoutes";
import AppError from "./utils/appError";
import globalErrorHandler from "./controllers/errorController";
import starredRouter from "./routes/starredRoutes";
// const viewRouter = require(`./routes/viewRoutes`);

const app: Application = express();

//TRUST HEROKU
app.enable(`trust proxy`);

//SERVE STATIC FILES
app.use("/", express.static(path.join(__dirname, "../../dist/baristabook")));

//ENABLE OUTSIDE API USAGE
app.use(cors());
app.options(`*`, cors());

//SET HTTP SECURITY HEADERS
app.use(helmet());

//DEVELOPMENT LOGGING
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === `development`) app.use(morgan(`dev`));

//BODY PARSER
app.use(express.json({ limit: `10kb` }));
//URL PARSER
app.use(express.urlencoded({ extended: true, limit: `10kb` }));
//COOKIE PARSER
app.use(cookieParser());

//LIMIT SAME API REQUESTS
const limiter = rateLimit({
  max: 1000,
  windowMs: 60 * 60 * 1000,
  message: `Too many requests from this IP, try again in an hour.`
});
app.use(`/api`, limiter);

//DATA SECURITY
app.use(mongoSanitize());
app.use(xss());

//COMPRESS FILES
app.use(compression());

//ERROR HANDLER
app.use(globalErrorHandler);

//MOUNT ROUTERS
// app.use(`/`, viewRouter);
app.use(`/api/v1/drinks`, drinkRouter);
app.use(`/api/v1/users`, userRouter);
app.use(`/api/v1/starred`, starredRouter);

app.all(`*`, (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server.`, 404));
});

//SETUP BUILD PATH
app.use((req: Request, res: Response, next: NextFunction) => {
  res.sendFile(path.join(__dirname, "../dist/baristabook/index.html"));
});

module.exports = app;
