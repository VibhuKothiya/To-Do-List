let http = require('http')
let express = require('express')
let cors = require("cors")
let app = express()

//cors
app.use(
    cors({
      origin: "*",
    })
  );
  
  //body
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  
  //routes
  app.use("/v1", routes);
  
  //database connection
  dbConnect();
  
  //server
  http.createServer(app).listen(process.env.PORT, () => {
    console.log(`server started on ${process.env.PORT}`);
  });