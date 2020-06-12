"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_mongo_sanitize_1 = __importDefault(require("express-mongo-sanitize"));
//@ts-ignore
const xss_clean_1 = __importDefault(require("xss-clean"));
const compression_1 = __importDefault(require("compression"));
const drinkRoutes_1 = __importDefault(require("./routes/drinkRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const appError_1 = __importDefault(require("./utils/appError"));
const errorController_1 = __importDefault(require("./controllers/errorController"));
const starredRoutes_1 = __importDefault(require("./routes/starredRoutes"));
// const viewRouter = require(`./routes/viewRoutes`);
const app = express_1.default();
//TRUST HEROKU
app.enable(`trust proxy`);
//SERVE STATIC FILES
app.use("/", express_1.default.static(path_1.default.join(__dirname, "../../dist/baristabook")));
//ENABLE OUTSIDE API USAGE
app.use(cors_1.default());
app.options(`*`, cors_1.default());
//SET HTTP SECURITY HEADERS
app.use(helmet_1.default());
//DEVELOPMENT LOGGING
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === `development`)
    app.use(morgan_1.default(`dev`));
//BODY PARSER
app.use(express_1.default.json({ limit: `10kb` }));
//URL PARSER
app.use(express_1.default.urlencoded({ extended: true, limit: `10kb` }));
//COOKIE PARSER
app.use(cookie_parser_1.default());
//LIMIT SAME API REQUESTS
const limiter = express_rate_limit_1.default({
    max: 1000,
    windowMs: 60 * 60 * 1000,
    message: `Too many requests from this IP, try again in an hour.`
});
app.use(`/api`, limiter);
//DATA SECURITY
app.use(express_mongo_sanitize_1.default());
app.use(xss_clean_1.default());
//COMPRESS FILES
app.use(compression_1.default());
//ERROR HANDLER
app.use(errorController_1.default);
//MOUNT ROUTERS
// app.use(`/`, viewRouter);
app.use(`/api/v1/drinks`, drinkRoutes_1.default);
app.use(`/api/v1/users`, userRoutes_1.default);
app.use(`/api/v1/starred`, starredRoutes_1.default);
app.all(`*`, (req, res, next) => {
    next(new appError_1.default(`Can't find ${req.originalUrl} on this server.`, 404));
});
//SETUP BUILD PATH
app.use((req, res, next) => {
    res.sendFile(path_1.default.join(__dirname, "../dist/baristabook/index.html"));
});
module.exports = app;
