const createError = require("http-errors");
const express = require("express");
const path = require("path");
const logger = require("morgan");

const eventRoutes =  require('./routes/eventRouter')

const app = express();

// setup for receiving JSON
app.use(express.json())

app.use(logger("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// route setup
app.use('/event', eventRoutes)

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






// flock.use((req, res, next) => {
//   console.log(req.path, req.method)
//   next()
// })



// mongoose.connect(process.env.MONGO_DB_URI)
//   .then(() => {
//     flock.listen(process.env.PORT_NO, () => {
//         console.log('Listening on port', process.env.PORT_NO)
//       })
//   })
//   .catch((error) => {
//     console.log(error)
//   })





module.exports = app;
