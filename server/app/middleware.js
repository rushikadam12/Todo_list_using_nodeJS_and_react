const jwt=require('jsonwebtoken')
module.exports= VerifyUser = (req, res, next) => {
  //this is the middleware run every time when request is made for authentication
    const token = req.headers["x-access-token"];//here we use headers to get token from request
    if (!token) {
      res.send({ error_msg: "Need token so pls Login again"});
    }
    if (token) {
      jwt.verify(token, process.env.SECR_KEY, (err, decoded) => {//checking the token currently in localStorage or not if true then pass the following res()
        if (err) {
          res.send({ auth: false, error_msg: "failed to authenticate" });
        }
         else {
          const userID=decoded.id;// set the decoded id carefully otherwise you wont get the access of it
          //here we decode the user id which we set in database so here we set it in req.userId which will be accessed by other POST/GET request which we use in for User.js for extracting user info
          req.userId =userID;
          next();
        }
      });
    }
  };

    
  