import {
  getUsersByEmail,
  insertUsers,
  getUsersById,
} from "../model/UsersModel.js";
import bcryrpt from "bcrypt";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
  const { username, email, password, role_id } = req.body;
  const hasPass = await bcryrpt.hash(password, 10);
  try {
    const register = await insertUsers({
      username,
      email,
      password: hasPass,
      role_id: 1,
    });
    return res.status(201).json({
      status: "success",
      message: "Registerasi berhasil",
      data: register.insertId,
    });
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      return res.status(400).json({
        status: "fail",
        message: "email sudah di gunakan",
      });
    }
    res.status(500).json({
      status: "error",
      message: `terjadi kesalahan ${error.message}`,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const users = await getUsersByEmail(email);
    if (users.length === 0) {
      return res.status(401).json({
        message: "user tidak di temukan",
      });
    }

    const user = users[0];

    const isMatch = await bcryrpt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "password atau email salah",
      });
    }

    const token = jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
    );
    res.status(200).json({
      message: "login behasil",
      token,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: `terjadi kesalahan ${error.message}`,
    });
  }
};

const me = async (req, res) => {
  try {
    const user = await getUsersById(req.userId);
    if (!user)
      return res.status(400).json({ message: "user tidak di temukan" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export { register, login, me };
