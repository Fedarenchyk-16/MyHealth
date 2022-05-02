const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");


const nodemailer = require("nodemailer")
const transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: "myhealth2001@outlook.com",
    pass: "16Nkt2001"
  }
})



const bcrypt = require("bcrypt");
const saltRounds = 10;


const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 150 * 60 * 24, //60 60 24
    },
  })
);

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "12345678",
  database: "LoginSystem",
});

const checkIfUserExist = (username) => {

}

app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const role = req.body.doctor ? "doctor" : "patient";

  db.query(
    "SELECT * FROM users WHERE username = ?;",
    username,
    (err, result) => {
      console.log("------------------------------------------------")
      console.log(result);
      console.log("------------------------------------------------")
      console.log(err);
      console.log("------------------------------------------------")
      console.log(result.length);
      if (err || result.length > 0) {
        res.send({ error: "userExist" });
      } else {
        console.log("in iffffff")
        bcrypt.hash(password, saltRounds, (err, hash) => {
          if (err) {
            console.log(err);
            res.send({ error: err });
          }
          db.query(
            "INSERT INTO users (username, password, role) VALUES (?,?,?)",
            [username, hash, role],
            (err, result) => {
              if (err) {
                res.send({ error: "userExist" });
              } else {
                res.send({ ok: true });
              }
            }
          );
        });
      }

    }
  );
});

app.get("/login", (req, res) => {
  if (req.session.user) {
    console.log(req.session.user)
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

app.get("/logout", (req, res) => {
  res.cookie('userId', '', { maxAge: 1 });
  res.send({ deleted: true });
});

const verifyJWT = (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token) {
    res.send("we need token");
  } else {
    jwt.verify(token, "jwtSecret", (err, decoded) => {
      if (err) {
        res.json({ auth: false, message: "you faild to auth" });
      } else {
        res.userId = decoded.id;
        next();
      }
    })
  }
};

app.get('/isUserAuth', verifyJWT, (req, res) => {
  res.send("yo you are auth")
})

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE username = ?;",
    username,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (error, response) => {
          if (response) {
            console.log(result)
            const id = result[0].id;
            const token = jwt.sign({ id }, "jwtSecret", {
              expiresIn: 10000, //300
            })
            req.session.user = result;

            console.log("177-------- ");
            console.log(req.session.user);
            res.json({ auth: true, token: token, result: result });
          } else {
            res.json({ auth: false, message: "Wrong username/password combination!" });
          }
        });
      } else {
        res.json({ auth: false, message: "no user exists" });
      }
    }
  );
});

app.get("/doctors", (req, res) => {

  db.query(
    "SELECT * FROM users ",
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      res.send({ result: result });

    }
  );

});

app.post("/user", (req, res) => {
  console.log(req.body)
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  db.query(
    "SELECT * FROM users WHERE firstname = ? AND lastname = ? ;",
    [firstname,
      lastname]
    ,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      res.send({ result: result });

    }
  );

});

app.post("/user/id", (req, res) => {
  const id = req.body.id;
  console.log(id)
  db.query(
    "SELECT * FROM users WHERE id = ?",
    [id]
    ,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      res.send({ result: result });

    }
  );

});

app.post("/appointment/new", (req, res) => {
  const clientId = req.body.id;
  const theme = req.body.theme;
  const text = req.body.text;
  const cr_date = new Date().toJSON().slice(0, 19).replace('T', ' ')

  db.query(
    "INSERT INTO appointment (status, client, theme, text, creation_date) VALUES (?,?,?,?,?)",
    ["ACTIVE", clientId, theme, text, cr_date],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );

});

app.get("/appointment/active", (req, res) => {

  db.query(
    "SELECT * FROM appointment WHERE status = 'ACTIVE'",
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      res.send({ result: result });

    }
  );

});

app.post("/appointment/user", (req, res) => {
  const id = req.body.id;
  console.log(id);
  db.query(
    "SELECT * FROM appointment WHERE client = ?",
    [id],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      res.send({ result: result });

    }
  );

});

app.post("/test", (req, res) => {
  console.log(req.body)
  const options = {
    from: "myhealth2001@outlook.com",
    to: req.body.email,
    subject: "MyHealt test",
    text: `User ${req.body.user} have very bad test results! \n Phone: ${req.body.phone} \n User need help immediatly!`
  }

  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Send: " + info.response)
    res.send({ result: info.response })
  })

  // db.query(
  //   "SELECT * FROM appointment WHERE client = ?",
  //   [id],
  //   (err, result) => {
  //     if (err) {
  //       res.send({ err: err });
  //     }
  //     res.send({ result: result });

  //   }
  // );

});


app.put("/appointment/answer", (req, res) => {
  const appointmentId = req.body.app_id;
  // const clientId = req.body.cl_id;
  const doctorId = req.body.doc_id;
  // const theme = req.body.theme;
  // const text = req.body.text;
  // const cr_date = req.body.cr_date.replace('T', ' ');
  const answer = req.body.answer;
  const approve_date = new Date().toJSON().slice(0, 19).replace('T', ' ');
  console.log(req.body)
  db.query(
    "UPDATE appointment SET status=?, doctor=?, approve_date=?, answer=? WHERE id=?",
    [
      "COMPLETED",
      doctorId,
      approve_date,
      answer,
      appointmentId
    ],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      } else {
        res.send({ result: result });
      }
    }
  );

});

app.post("/account/check_passwords", (req, res) => {
  const fields = req.body.obj;
  const role = req.body.role;

  console.log(req.body)
  db.query(
    "SELECT * FROM users WHERE username = ?;",
    fields.user.username,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result.length > 0) {
        bcrypt.compare(fields.oldPass, result[0].password, (error, response) => {
          if (response) {
            console.log("Its ok ")

            bcrypt.hash(fields.newPass, saltRounds, (err, hash) => {
              if (err) {
                console.log(err);
              } else {
                res.json({ correct: true, message: "Passwords correct" });
              }
            });
          } else {
            res.json({ correct: false, message: "Wrong passwords" });
          }
        }
        )
      } else {
        console.log("no user exists")
        res.json({ correct: false, message: "no user exists" });
      }
    }
  )
})

app.put("/account/edit", (req, res) => {
  const fields = req.body.obj;
  const role = req.body.role;
  console.log("------------------------------------------------")
  console.log(req.body)
  console.log("------------------------------------------------")
  db.query(
    "SELECT * FROM users WHERE username = ?;",
    fields.user.username,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result.length > 0) {
        if (fields.checkbox) {
          bcrypt.compare(fields.oldPass, result[0].password, (error, response) => {
            if (response) {
              console.log("Its ok ")

              bcrypt.hash(fields.newPass, saltRounds, (err, hash) => {
                if (err) {
                  console.log(err);
                }
                if (role === "patient") {
                  db.query(
                    "UPDATE users SET firstname=?, lastname=?, password=? WHERE id=?",
                    [
                      fields.firstname,
                      fields.lastname,
                      hash,
                      fields.user.id
                    ],
                    (err, result) => {
                      if (err) {
                        console.log("something got wrong")
                        res.send({ err: err });
                      } else {
                        console.log("YOHO CHANGED PASSWORD")
                        req.session.user = [
                          {
                            id: fields.user.id,
                            username: fields.user.username,
                            password: hash,
                            role: fields.user.role,
                            firstname: fields.firstname,
                            lastname: fields.lastname,
                            description: null,
                            speciality: null
                          }
                        ];
                        res.send({ result: result });
                      }
                    }
                  );
                } else {
                  db.query(
                    "UPDATE users SET firstname=?, lastname=?, description=?, speciality=?, password=? WHERE id=?",
                    [
                      fields.firstname,
                      fields.lastname,
                      fields.description,
                      fields.speciality,
                      hash,
                      fields.user.id
                    ],
                    (err, result) => {
                      if (err) {
                        console.log("something got wrong")
                        res.send({ err: err });
                      } else {
                        console.log("YOHO CHANGED PASSWORD")
                        req.session.user = [
                          {
                            id: fields.user.id,
                            username: fields.user.username,
                            password: hash,
                            role: fields.user.role,
                            firstname: fields.firstname,
                            lastname: fields.lastname,
                            description: fields.description,
                            speciality: fields.speciality
                          }
                        ];
                        res.send({ result: result });
                      }
                    }
                  );
                }
              });
            } else {
              console.log("Wrong username/password combination!")
              res.json({ auth: false, err: "Wrong username/password combination!" });
            }
          });
        } else {
          if (role === "patient") {
            db.query(
              "UPDATE users SET firstname=?, lastname=? WHERE id=?",
              [
                fields.firstname,
                fields.lastname,
                fields.user.id
              ],
              (err, result) => {
                if (err) {
                  console.log("something got wrong with data")
                  res.send({ err: err });
                } else {
                  console.log("YOHO CHANGED DATA")
                  req.session.user = [
                    {
                      id: fields.user.id,
                      username: fields.user.username,
                      password: fields.user.password,
                      role: fields.user.role,
                      firstname: fields.firstname,
                      lastname: fields.lastname,
                      description: null,
                      speciality: null
                    }
                  ];
                  res.send({ result: result });
                }
              }
            );
          } else {
            db.query(
              "UPDATE users SET firstname=?, lastname=?, description=?, speciality=? WHERE id=?",
              [
                fields.firstname,
                fields.lastname,
                fields.description,
                fields.speciality,
                fields.user.id
              ],
              (err, result) => {
                if (err) {
                  console.log("something got wrong doctors")
                  res.send({ err: err });
                } else {
                  console.log("YOHO CHANGED Data doctors")
                  req.session.user = [
                    {
                      id: fields.user.id,
                      username: fields.user.username,
                      password: fields.user.password,
                      role: fields.user.role,
                      firstname: fields.firstname,
                      lastname: fields.lastname,
                      description: fields.description,
                      speciality: fields.speciality
                    }
                  ];
                  res.send({ result: result });
                }
              }
            );
          }
        }
      } else {
        console.log("no user exists")
        res.json({ auth: false, err: "no user exists" });
      }
    }
  );
});

app.listen(3001, () => {
  console.log("running server");
});
