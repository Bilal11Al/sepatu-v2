import db from "../config/database.js";

const getProduct = async () => {
  const sql = `SELECT p.name,p.description,p.image,p.categoreis_id,p.price,c.category FROM products as p JOIN categories AS c ON c.id = p.categoreis_id`;
  const [rows] = await db.execute(sql);
  return rows;
};

const insertProduct = async (data) => {
  const sql = `INSERT INTO products(name, description, image, categoreis_id, price) VALUES (?,?,?,?,?)`;
  const [rows] = await db.execute(sql, [
    data.name,
    data.description,
    data.image,
    data.categoreis_id,
    data.price,
  ]);
  return rows;
};

const updateProducts = async (data, id) => {
  const keys = Object.keys(data);

  if (!keys.length) {
    throw new Error("Tidak ada data untuk diupdate");
  }

  const fields = keys.map((key) => `${key} = ?`).join(", ");
  const values = keys.map((key) => data[key]);

  const sql = `UPDATE products SET ${fields} WHERE id = ?`;

  const [rows] = await db.execute(sql, [...values, id]);
  return rows;
};

const getProductByid = async (id) => {
  const sql = `SELECT * FROM products WHERE id = ?`;
  if (!id) return [];
  const [rows] = await db.execute(sql, [id]);
  return rows;
};

const deleteProducts = async (id) => {
  const sql = `DELETE FROM products WHERE id=?`;
  const [rows] = await db.execute(sql, [id]);
  return rows;
};

export {
  getProduct,
  insertProduct,
  updateProducts,
  getProductByid,
  deleteProducts,
};
