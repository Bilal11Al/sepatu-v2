import { getAllSize, insertSize } from "../model/SIzeModel.js";

const getSize = async (_, res) => {
  try {
    const size = await getAllSize();
    res.status(200).json({
      status: "success",
      message: "data berhasil",
      data: size,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "gagal mengabil data",
    });
  }
};

const sizeAllInserts = async (req, res) => {
  try {
    const { name } = req.body;
    const size = await insertSize({ name });
    res.status(200).json({
      status: "success",
      message: "data size berhasil di insert",
      data: size.insertId,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: `terjadi kesalahan ${error.message}`,
    });
  }
};

export { getSize, sizeAllInserts };
