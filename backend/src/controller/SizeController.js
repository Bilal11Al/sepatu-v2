import { getAllSize } from "../model/SIzeModel.js";

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

export { getSize };
