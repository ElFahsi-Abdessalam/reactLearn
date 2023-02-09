const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");
// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("App.js", router);
app.use(express.static("src"));
app.get("/*",function (req,res) {
  res.sendFile(path.join(__dirname, './src', 'App.js'));
  //res.sendFile(path.resolve("public","index.html"));
 //res.sendFile("./src/App.js");
});
//app.use(express.static("server1.js"))
app.listen(3000, () => console.log("Server Running"));
//console.log(process.env.EMAIL_USER);
//console.log(process.env.EMAIL_PASS);
//
//const contactEmail = nodemailer.createTransport({
//  service: 'gmail',
//  auth: {
//    user: "********@gmail.com",
//    pass: ""
//  },
//});
//
//contactEmail.verify((error) => {
//  if (error) {
//    console.log(error);
//  } else {
//    console.log("Ready to Send");
//  }
//});
//
//router.post("/contact", (req, res) => {
//  const name = req.body.firstName + req.body.lastName;
//  const email = req.body.email;
//  const message = req.body.message;
//  const phone = req.body.phone;
//  const mail = {
//    from: name,
//    to: "********@gmail.com",
//    subject: "Contact Form Submission - Portfolio",
//    html: `<p>Name: ${name}</p>
//           <p>Email: ${email}</p>
//           <p>Phone: ${phone}</p>
//           <p>Message: ${message}</p>`,
//  };
//  contactEmail.sendMail(mail, (error) => {
//    if (error) {
//      res.json(error);
//    } else {
//      res.json({ code: 200, status: "Message Sent" });
//    }
//  });
//});
//