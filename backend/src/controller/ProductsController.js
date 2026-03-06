import {
  getProduct,
  insertProduct,
  updateProducts,
  getProductByid,
  deleteProducts,
} from "../model/ProductModel.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getProducts = async (req, res) => {
  try {
    const products = await getProduct();
    res.status(200).json({
      status: "success",
      message: "data berhasil",
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

const createProduct = async (req, res) => {
  try {
    const { name, description, categoreis_id, price, is_active, qty } =
      req.body;
    if (!req.file) {
      return res.status(400).json({ message: "image harus di upload" });
    }
    const image = req.file.filename;
    const products = await insertProduct({
      name,
      image,
      description,
      categoreis_id,
      price,
      is_active,
      qty,
    });

    res.status(201).json({
      status: "success",
      message: "product berhasil di upload",
      data: products.insertId,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

const updateProduct = async (req, res) => {
  const { name, description, categoreis_id, price,is_active,qty } = req.body;
  const id = Number(req.params.id);
  try {
    const product = await getProductByid(id);
    if (!product || product.length === 0) {
      return res.status(404).json({
        status: "fail",
        message: "id tidak ditemukan",
      });
    }
    let image = product[0].image || null;

    if (req.file) {
      if (product[0].image) {
        const oldPath = path.join(__dirname, "../../upload", product[0].image);
        if (fs.existsSync(oldPath)) {
          fs.unlinkSync(oldPath);
        }
      }

      image = req.file.filename;
    }

    const updateData = {};

    if (name !== undefined) updateData.name = name;
    if (description !== undefined) updateData.description = description;
    if (image !== undefined) updateData.image = image;
    if (categoreis_id !== undefined) updateData.categoreis_id = categoreis_id;
    if (price !== undefined) updateData.price = price;
    if (is_active !== undefined) updateData.is_active = is_active;
    if (qty !== undefined) updateData.qty= qty;

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({
        status: "fail",
        message: "tidak ada data yang diupdate",
      });
    }
    await updateProducts(updateData, id);

    res.status(200).json({
      status: "success",
      message: "product brehasil di update",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

const productDelete = async (req, res) => {
  const id = req.params.id;
  try {
    const products = await getProductByid(id);

    if (!products || products.length === 0) {
      return res.status(404).json({
        status: "fail",
        message: "id tidak ditemukan",
      });
    }

    const image = products[0].image;

    if (image) {
      const pathImage = path.join(__dirname, "../../upload", image);
      if (fs.existsSync(pathImage)) {
        fs.unlinkSync(pathImage);
      }
    }

    await deleteProducts(id);

    return res.status(200).json({
      status: "success",
      message: "produk berhasil di hapus",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

export { getProducts, createProduct, updateProduct, productDelete };
