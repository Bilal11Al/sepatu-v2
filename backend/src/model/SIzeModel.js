import db from "../config/database.js";

const getAllSize = async () => {
  const sql = "SELECT * FROM sizes ORDER BY name DESC";
  const [rows] = await db.execute(sql);
  return rows;
};

const insertSize = async (name) => {
  const sql = `INSERT INTO sizes(name) VALUES (?)`;
  const [rows] = await db.execute(sql, [data.name]);
  return rows;
};


const updateSize = async (id,data) => {
  const sql = ``;
  const [rows] =;
  return rows
}

export { getAllSize, insertSize };
