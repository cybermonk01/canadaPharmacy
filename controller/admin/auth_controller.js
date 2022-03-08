import User from "../../models/user.js";
import jwt from "jsonwebtoken";

export const signUp = (req, res) => {
  User.findOne({
    email: req.body.email,
  }).exec((error, user) => {
    if (user) return res.json({ message: "Admin already registered!" });
  });

  const { firstName, lastName, email, password } = req.body;

  const user = new User({
    firstName,
    lastName,
    email,
    password,
    username: Math.random().toString(),
    role: user.roles,
  });

  user.save((error, data) => {
    if (error) {
      return res.json({ message: "Something went Wrong" });
    }
    if (data) {
      return res.json({
        message: "admin created successfully",
      });
    }
  });
};

export const signin = (req, res) => {
  User.findOne({
    email: req.body.email,
  }).exec((error, user) => {
    if (error) {
      return res.json({ error });
    }
    if (user) {
      if (user.authenticate(req.body.password) && user.role === "admin") {
        const token = jwt.sign(
          { _id: user._id, role: user.role },
          process.env.SECRET_KEY,
          { expiresIn: "1d" }
        );
        const { _id, firstName, lastName, email, role, fullName } = user;

        res.cookie("token", token, { expiresIn: "1d" });

        res.status(200).json({
          token,
          user: {
            _id,
            firstName,
            lastName,
            email,
            role,
            fullName,
          },
        });
      } else {
        return res.status(400).json({ message: "kya karte ho pandey ji!!" });
      }
    } else {
      return res.json({ message: "Something went wrong" });
    }
  });
};

export const signout = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({
    message: "SignOut Successfully...!",
  });
};
