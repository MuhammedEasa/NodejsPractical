// Error Middleware
app.use((err, req, res, next) => {
  res.status(500).json({ message: "ERROR OCCURED IN SERVER" });
});

// Custom Middleware
const log = (req, res, next) => {
  console.log(Date.now());
  next();
};
