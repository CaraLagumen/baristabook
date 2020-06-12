const app = require(`./server/js/app`);
const mongoose = require(`mongoose`);
const dotenv = require(`dotenv`);

dotenv.config({ path: `./config.env` });
const DB = process.env.DATABASE.replace(
  `<PASSWORD>`,
  process.env.DATABASE_PASSWORD
);

//CONNECT TO DB
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log(`DB connection successful.`));

const port = process.env.PORT || 3000;
const server = app.listen(port, () =>
  console.log(`App running on port ${port}...`)
);

process.on(`uncaughtException`, err => {
  console.log(`Uncaught exception. Shutting down...`);
  console.log(err.name, err.message);
  process.exit(1);
});

process.on(`unhandledRejection`, err => {
  console.log(`Unhandled rejection. Shutting down...`);
  console.log(err.name, err.message);
  server.close(() => process.exit(1));
});

process.on(`SIGTERM`, () => {
  console.log(`SIGTERM RECEIVED. Shutting down gracefully...`);
  server.close(() => console.log(`Process terminated.`));
});
