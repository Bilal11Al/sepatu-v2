import {
  getAllUsers,
  insertUsers,
  updateUsers,
  getUsersById,
  deleteUser,
} from "../model/UsersModel.js";
import bcyrpt from "bcrypt";

const getUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).json({
      status: "success",
      message: "data berhasil",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: `terjadi kesalahan ${error.message}`,
    });
  }
};

const createUsers = async (req, res) => {
  const { username, email, password, role_id } = req.body;
  const hasPass = await bcyrpt.hash(password, 10);

  try {
    const users = await insertUsers({
      username,
      email,
      password: hasPass,
      role_id,
    });
    return res.status(201).json({
      status: "success",
      message: "user berhasil di buat",
      insertId: users.insertId,
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

const usersUpdate = async (req, res) => {
  const { id } = req.params;
  const { username, email, password, role_id } = req.body;

  try {
    const user = await getUsersById(id);

    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "user tidak ditemukan",
      });
    }

    const updateData = {};

    if (username !== undefined) updateData.username = username;
    if (email !== undefined) updateData.email = email;
    if (role_id !== undefined) updateData.role_id = role_id;

    if (password !== undefined && password !== "") {
      updateData.password = await bcyrpt.hash(password, 10);
    }

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({
        status: "fail",
        message: "tidak ada data yang diupdate",
      });
    }

    await updateUsers(id, updateData);

    res.status(200).json({
      status: "success",
      message: "user berhasil diupdate",
    });

  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: `terjadi kesalahan ${error.message}`,
    });
  }
};


const usersDelete = async (req, res) => {
  const { id } = req.params;
  try {
    const users = await deleteUser(id);
    return res.status(200).json({
      status: "success",
      message: "data berhasil di hapus",
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: `terjadi kesalahan ${error.message}`,
    });
  }
};

export { getUsers, createUsers, usersUpdate,usersDelete };
