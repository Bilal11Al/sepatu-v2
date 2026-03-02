import db from "../config/database.js";

const getAllCategory = async () => {
  const sql = "SELECT * FROM categories";
  const [rows] = await db.execute(sql);
  return rows;
};

const selectById = async (id) => {
  const sql = "SELECT id, category, update_at FROM categories WHERE id=?";
  const [rows] = await db.execute(sql,[id]);
  return rows;
}


const insertCategory= async (category) => {
    const sql ='INSERT INTO categories(category) VALUES (?)' ;
    const [rows] = await db.execute(sql,[category]);
    return rows;
}


const updateCategory = async (id,category) => {
  const sql = 'UPDATE categories SET category= ? WHERE id=?';
  const [rows] = await db.execute(sql,[category,id]);
  return rows;
}


const deletCategory = async ( id) => {
  const sql = 'DELETE FROM categories WHERE id=?';
  const [rows] = await db.execute(sql,[id]);
  return rows;
}

export { getAllCategory,insertCategory,updateCategory,deletCategory, selectById };
