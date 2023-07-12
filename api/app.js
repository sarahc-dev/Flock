const createError = require("http-errors");
const express = require("express");
const path = require("path");
const logger = require("morgan");

const eventRoutes = require('./routes/eventRouter')
const userRoutes = require('./routes/userRouter')

const app = express();

// setup for receiving JSON
app.use(express.json())

app.use(logger("dev"));
// ^^^^^^^ => The below (Lines 16-20) is the same logic ad line 14 above.
// flock.use((req, res, next) => {
//   console.log(req.path, req.method)
//   next()
// })

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// route setup
app.use('/event', eventRoutes)
app.use('/user', userRoutes)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // respond with details of the error
  res.status(err.status || 500).json({message: 'server error'})
});

module.exports = app;
