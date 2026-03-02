import {
  getAllCategory,
  insertCategory,
  updateCategory,
  deletCategory,
  selectById,
} from "../model/CategoryModels.js";

const getCategory = async (req, res) => {
  try {
    const category = await getAllCategory();
    res.status(200).json({
      status: "success",
      message: "Data berhasil",
      data: category,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

const createCategory = async (req, res) => {
  try {
    const { category } = req.body;
    const categorys = await insertCategory(category);
    res.status(201).json({
      status: "success",
      message: "data berhasil di buat",
      insertId: categorys.insertId,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

const categoryUpdate = async (req, res) => {
  const { id } = req.params;
  const { category } = req.body;
  try {
    const categorys = await updateCategory(id, category);
    const byIdCate = await  selectById(id);

    if (categorys.affectedRows === 0) {
      return res.status(404).json({
        status: "fail",
        message: "id tidak di temukan",
      });
    }
    res.status(200).json({
      status: "success",
      message: "data berhasil di update",
      data: byIdCate[0]
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

const categoryDelete = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await deletCategory(id);
    if (category.affectedRows === 0) {
      return res.status(404).json({
        status: "fail",
        message: "id tidak di temukan",
      });
    }
    res.status(200).json({
      status: "success",
      message: "data berhasil di delete",
      id: category.affectedRows,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

export { getCategory, createCategory, categoryUpdate, categoryDelete };
