import {
  getAllRole,
  cretaeRole,
  updateAllRoles,
  deleteRolesByid,
} from "../model/RoleModels.js";

const getAll = async (req, res) => {
  try {
    const roles = await getAllRole();
    res.status(200).json({
      status: "success",
      message: "data Berhasil",
      data: roles,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: `terjadi kesalahan ${error.message}`,
    });
  }
};

const createRoles = async (req, res) => {
  try {
    const { role } = req.body;
    const roles = await cretaeRole({ role });
    res.status(201).json({
      status: "success",
      message: "Data berhasil di tambah",
      insertid: roles.insertId,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: `terjadi kesalahan ${error.message}`,
    });
  }
};

const updateRoles = async (req, res) => {
  try {
    const { role } = req.body;
    const { id } = req.params;
    const roles = await updateAllRoles(id, { role });
    if (!roles || roles.affectedRows === 0) {
      return res.status(404).json({
        status: "fail",
        message: "Id tidak ditemukan",
      });
    }
    res.status(200).json({
      status: "success",
      message: "data berhasil di update",
      changedRows: roles.changedRows,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: `terjadi kesalahan ${error.message}`,
    });
  }
};

const deleteRole = async (req, res) => {
  try {
    const { id } = req.params;
    const roles = deleteRolesByid(id);
    res.status(200).json({
      status: "success",
      message: "data roles berhasil di hapus",
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: `terjadi kesalahan ${error.message}`,
    });
  }
};

export { getAll, createRoles, updateRoles, deleteRole };
